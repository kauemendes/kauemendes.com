import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'

jest.mock('@/lib/agent/load-knowledge', () => ({
  loadKnowledge: async () => 'CONTEXTO',
}))

import { POST } from '@/app/api/ask/route'

const req = (body: unknown) =>
  new Request('http://localhost/api/ask', { method: 'POST', body: typeof body === 'string' ? body : JSON.stringify(body) })

const ok = { locale: 'pt', messages: [{ role: 'user', content: 'Onde você trabalhou?' }] }
const realFetch = global.fetch

describe('POST /api/ask', () => {
  beforeEach(() => {
    process.env.LLM_GATEWAY_URL = 'https://llm.example.com'
    process.env.LLM_GATEWAY_KEY = 'sk-test'
  })
  afterEach(() => {
    global.fetch = realFetch
    delete process.env.LLM_GATEWAY_URL
    delete process.env.LLM_GATEWAY_KEY
  })

  it('400 para JSON inválido e para corpo fora da regra', async () => {
    expect((await POST(req('{'))).status).toBe(400)
    expect((await POST(req({ locale: 'xx', messages: [] }))).status).toBe(400)
  })

  it('503 offline quando o gateway não está configurado', async () => {
    delete process.env.LLM_GATEWAY_URL
    const res = await POST(req(ok))
    expect(res.status).toBe(503)
    expect(await res.json()).toEqual({ offline: true })
  })

  it('503 offline quando o gateway falha', async () => {
    global.fetch = (async () => { throw new Error('ECONNREFUSED') }) as typeof fetch
    const res = await POST(req(ok))
    expect(res.status).toBe(503)
    expect(await res.json()).toEqual({ offline: true })
  })

  it('200 com o texto em streaming e o contexto no prompt de sistema', async () => {
    let sent: { messages: { role: string; content: string }[] } | undefined
    global.fetch = (async (_url: string, init: RequestInit) => {
      sent = JSON.parse(init.body as string)
      return new Response('data: {"choices":[{"delta":{"content":"Na Vórtx."}}]}\n\ndata: [DONE]\n\n', { status: 200 })
    }) as unknown as typeof fetch
    const res = await POST(req(ok))
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toContain('text/plain')
    expect(await res.text()).toBe('Na Vórtx.')
    expect(sent!.messages[0].role).toBe('system')
    expect(sent!.messages[0].content).toContain('CONTEXTO')
    expect(sent!.messages[1]).toEqual({ role: 'user', content: 'Onde você trabalhou?' })
  })
})
