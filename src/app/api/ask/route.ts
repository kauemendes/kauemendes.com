import { parseAskRequest } from '@/lib/agent/validate'
import { loadKnowledge } from '@/lib/agent/load-knowledge'
import { buildSystemPrompt } from '@/lib/agent/prompt'
import { readGatewayConfig, openChatStream, sseToText } from '@/lib/agent/gateway'

export const dynamic = 'force-dynamic'

const offline = () => Response.json({ offline: true }, { status: 503, headers: { 'Cache-Control': 'no-store' } })

/** Não registra o conteúdo das perguntas. */
export async function POST(request: Request): Promise<Response> {
  let body: unknown
  try {
    body = await request.json()
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
  } catch {
    return offline()
  }
}
