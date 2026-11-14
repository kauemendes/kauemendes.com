import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'

jest.mock('@/lib/agent/load-knowledge', () => ({
  loadKnowledge: async () => 'CONTEXTO',
}))

import { POST } from '@/app/api/ask/route'

const req = (body: unknown, headers: Record<string, string> = {}) =>
  new Request('http://localhost/api/ask', {
    method: 'POST',
    body: typeof body === 'string' ? body : JSON.stringify(body),
    headers,
  })

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

  it('413 para corpo acima de 32 KB', async () => {
    const res = await POST(req('x'.repeat(32 * 1024 + 1)))
    expect(res.status).toBe(413)
    expect(await res.json()).toEqual({ error: 'too_large' })
  })

  it('403 para sec-fetch-site cross-site', async () => {
    const res = await POST(req(ok, { 'sec-fetch-site': 'cross-site' }))
    expect(res.status).toBe(403)
    expect(await res.json()).toEqual({ error: 'forbidden' })
  })

  it('403 quando o host da origin difere do host da requisição', async () => {
    const res = await POST(req(ok, { host: 'localhost', origin: 'https://evil.example' }))
    expect(res.status).toBe(403)
    expect(await res.json()).toEqual({ error: 'forbidden' })
  })

  it('200 com origin do mesmo host', async () => {
    global.fetch = (async () =>
      new Response('data: {"choices":[{"delta":{"content":"ok"}}]}\n\n', { status: 200, headers: { 'content-type': 'text/event-stream' } })) as unknown as typeof fetch
    const res = await POST(req(ok, { host: 'localhost', origin: 'http://localhost' }))
    expect(res.status).toBe(200)
    expect(await res.text()).toBe('ok')
  })

  it('503 offline quando o gateway falha', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {})
    global.fetch = (async () => { throw new Error('ECONNREFUSED') }) as typeof fetch
    const res = await POST(req(ok))
    expect(res.status).toBe(503)
    expect(await res.json()).toEqual({ offline: true })
    expect(spy).toHaveBeenCalledWith('ask: offline', expect.not.stringContaining('Onde'))
    spy.mockRestore()
  })

  it('200 com o texto em streaming e o contexto no prompt de sistema', async () => {
    let sent: { messages: { role: string; content: string }[] } | undefined
    global.fetch = (async (_url: string, init: RequestInit) => {
      sent = JSON.parse(init.body as string)
      return new Response('data: {"choices":[{"delta":{"content":"Na Vórtx."}}]}\n\ndata: [DONE]\n\n', { status: 200, headers: { 'content-type': 'text/event-stream' } })
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
