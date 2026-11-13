import { parseAskRequest } from '@/lib/agent/validate'
import { loadKnowledge } from '@/lib/agent/load-knowledge'
import { buildSystemPrompt } from '@/lib/agent/prompt'
import { readGatewayConfig, openChatStream, sseToText, GatewayError } from '@/lib/agent/gateway'

export const dynamic = 'force-dynamic'

const offline = () => Response.json({ offline: true }, { status: 503, headers: { 'Cache-Control': 'no-store' } })

const MAX_BODY_CHARS = 32 * 1024
const forbidden = () => Response.json({ error: 'forbidden' }, { status: 403 })

function sameOrigin(request: Request): boolean {
  if (request.headers.get('sec-fetch-site') === 'cross-site') return false
  const origin = request.headers.get('origin')
  if (origin) {
    try {
      if (new URL(origin).host !== request.headers.get('host')) return false
    } catch {
      return false
    }
  }
  return true
}

/** Não registra o conteúdo das perguntas. */
export async function POST(request: Request): Promise<Response> {
  if (!sameOrigin(request)) return forbidden()

  const raw = await request.text()
  if (raw.length > MAX_BODY_CHARS) return Response.json({ error: 'too_large' }, { status: 413 })

  let body: unknown
  try {
    body = JSON.parse(raw)
  } catch {
    return Response.json({ error: 'invalid_json' }, { status: 400 })
  }

  const parsed = parseAskRequest(body)
  if ('error' in parsed) return Response.json({ error: parsed.error }, { status: 400 })

  const config = readGatewayConfig()
  if (!config) return offline()

  try {
    const { locale, messages } = parsed.value
    const system = buildSystemPrompt(locale, await loadKnowledge(locale))
    const upstream = await openChatStream(config, [{ role: 'system', content: system }, ...messages])
    return new Response(upstream.pipeThrough(sseToText()), {
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    })
  } catch (e) {
    // Só a causa; nunca as mensagens nem o conteúdo das perguntas.
    console.error('ask: offline', e instanceof GatewayError ? e.message : 'knowledge')
    return offline()
  }
}
