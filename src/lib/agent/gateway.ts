import type { ChatMessage } from '@/lib/agent/validate'

export interface GatewayConfig {
  url: string
  key: string
  accessId?: string
  accessSecret?: string
}

export class GatewayError extends Error {}

type Env = Record<string, string | undefined>

export const AGENT_MODEL = 'fast'
export const MAX_TOKENS = 400
const HEALTH_TIMEOUT_MS = 1500
const CHAT_TIMEOUT_MS = 30000

export function readGatewayConfig(env: Env = process.env): GatewayConfig | null {
  const url = env.LLM_GATEWAY_URL?.trim().replace(/\/+$/, '')
  const key = env.LLM_GATEWAY_KEY?.trim()
  if (!url || !key) return null
  return {
    url,
    key,
    accessId: env.CF_ACCESS_CLIENT_ID?.trim() || undefined,
    accessSecret: env.CF_ACCESS_CLIENT_SECRET?.trim() || undefined,
  }
}

export function gatewayHeaders(c: GatewayConfig): Record<string, string> {
  const h: Record<string, string> = { Authorization: `Bearer ${c.key}` }
  if (c.accessId && c.accessSecret) {
    h['CF-Access-Client-Id'] = c.accessId
    h['CF-Access-Client-Secret'] = c.accessSecret
  }
  return h
}

/** Qualquer falha (sem config, timeout, 403 do Access, 5xx) conta como offline. */
export async function getAgentStatus(
  c: GatewayConfig | null = readGatewayConfig(),
  fetchImpl: typeof fetch = fetch,
): Promise<boolean> {
  if (!c) return false
  try {
    const res = await fetchImpl(`${c.url}/health/liveliness`, {
      headers: gatewayHeaders(c),
      signal: AbortSignal.timeout(HEALTH_TIMEOUT_MS),
      cache: 'no-store',
    })
    return res.ok
  } catch {
    return false
  }
}

export async function openChatStream(
  c: GatewayConfig,
  messages: { role: 'system' | ChatMessage['role']; content: string }[],
  fetchImpl: typeof fetch = fetch,
): Promise<ReadableStream<Uint8Array>> {
  let res: Response
  try {
    res = await fetchImpl(`${c.url}/chat/completions`, {
      method: 'POST',
      headers: { ...gatewayHeaders(c), 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: AGENT_MODEL, stream: true, max_tokens: MAX_TOKENS, messages }),
      signal: AbortSignal.timeout(CHAT_TIMEOUT_MS),
      cache: 'no-store',
    })
  } catch (e) {
    throw new GatewayError(`fetch failed: ${(e as Error).message}`)
  }
  if (!res.ok || !res.body) throw new GatewayError(`upstream ${res.status}`)
  return res.body
}

/** Converte o SSE do formato OpenAI em texto puro (só os `delta.content`). */
export function sseToText(): TransformStream<Uint8Array, Uint8Array> {
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()
  let buffer = ''

  const handle = (line: string, controller: TransformStreamDefaultController<Uint8Array>) => {
    const t = line.trim()
    if (!t.startsWith('data:')) return
    const data = t.slice(5).trim()
    if (!data || data === '[DONE]') return
    let json: { error?: unknown; choices?: { delta?: { content?: unknown } }[] } | undefined
    try {
      json = JSON.parse(data)
    } catch {
      return // evento malformado: ignora
    }
    if (json && typeof json === 'object' && 'error' in json) {
      controller.error(new GatewayError('upstream stream error'))
      return
    }
    const piece = json?.choices?.[0]?.delta?.content
    if (typeof piece === 'string' && piece) controller.enqueue(encoder.encode(piece))
  }

  return new TransformStream({
    transform(chunk, controller) {
      buffer += decoder.decode(chunk, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() ?? ''
      for (const l of lines) handle(l, controller)
    },
    flush(controller) {
      if (buffer) handle(buffer, controller)
    },
  })
}
