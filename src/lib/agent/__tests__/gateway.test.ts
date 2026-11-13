import { describe, expect, it, jest } from '@jest/globals'
import {
  readGatewayConfig, gatewayHeaders, getAgentStatus, openChatStream, sseToText, GatewayError,
} from '@/lib/agent/gateway'

const env = {
  LLM_GATEWAY_URL: 'https://llm.example.com/',
  LLM_GATEWAY_KEY: 'sk-test',
  CF_ACCESS_CLIENT_ID: 'id',
  CF_ACCESS_CLIENT_SECRET: 'secret',
}

const streamOf = (...parts: string[]) =>
  new ReadableStream<Uint8Array>({
    start(c) {
      for (const p of parts) c.enqueue(new TextEncoder().encode(p))
      c.close()
    },
  })

const readAll = async (s: ReadableStream<Uint8Array>) => new Response(s).text()

describe('readGatewayConfig', () => {
  it('lê as env vars e tira a barra final da URL', () => {
    expect(readGatewayConfig(env)).toEqual({ url: 'https://llm.example.com', key: 'sk-test', accessId: 'id', accessSecret: 'secret' })
  })
  it('sem URL ou chave → null', () => {
    expect(readGatewayConfig({ LLM_GATEWAY_KEY: 'k' })).toBeNull()
    expect(readGatewayConfig({ LLM_GATEWAY_URL: 'u' })).toBeNull()
  })
  it('Access é opcional (dev local direto no litellm.localhost)', () => {
    expect(readGatewayConfig({ LLM_GATEWAY_URL: 'http://litellm.localhost', LLM_GATEWAY_KEY: 'k' })?.accessId).toBeUndefined()
  })
})

describe('gatewayHeaders', () => {
  it('inclui Bearer e os headers do Access quando existem', () => {
    const h = gatewayHeaders(readGatewayConfig(env)!)
    expect(h.Authorization).toBe('Bearer sk-test')
    expect(h['CF-Access-Client-Id']).toBe('id')
    expect(h['CF-Access-Client-Secret']).toBe('secret')
  })
})

describe('getAgentStatus', () => {
  const cfg = readGatewayConfig(env)!
  it('true quando o health responde 200', async () => {
    const f = jest.fn(async (_url: string, _init?: RequestInit) => new Response('ok', { status: 200 }))
    await expect(getAgentStatus(cfg, f as unknown as typeof fetch)).resolves.toBe(true)
    expect(f).toHaveBeenCalledWith('https://llm.example.com/health/liveliness', expect.anything())
  })
  it('false com 403 do Access, erro de rede ou sem config', async () => {
    await expect(getAgentStatus(cfg, (async () => new Response('', { status: 403 })) as unknown as typeof fetch)).resolves.toBe(false)
    await expect(getAgentStatus(cfg, (async () => { throw new Error('down') }) as unknown as typeof fetch)).resolves.toBe(false)
    await expect(getAgentStatus(null)).resolves.toBe(false)
  })
})

describe('openChatStream', () => {
  const cfg = readGatewayConfig(env)!
  it('envia model fast, stream e max_tokens', async () => {
    const f = jest.fn(async (_url: string, _init: RequestInit) => new Response(streamOf('data: [DONE]\n\n'), { status: 200 }))
    await openChatStream(cfg, [{ role: 'user', content: 'oi' }], f as unknown as typeof fetch)
    const [url, init] = f.mock.calls[0]
    expect(url).toBe('https://llm.example.com/chat/completions')
    expect(JSON.parse(init.body as string)).toMatchObject({ model: 'fast', stream: true, max_tokens: 400 })
  })
  it('lança GatewayError quando o upstream não é 2xx', async () => {
    const f = async () => new Response('nope', { status: 502 })
    await expect(openChatStream(cfg, [], f as unknown as typeof fetch)).rejects.toBeInstanceOf(GatewayError)
  })
})

describe('sseToText', () => {
  it('extrai o delta.content, inclusive com evento quebrado entre chunks', async () => {
    const s = streamOf(
      'data: {"choices":[{"delta":{"content":"Ol"}}]}\n\ndata: {"choices":[{"del',
      'ta":{"content":"á!"}}]}\n\n: keep-alive\n\ndata: {"choices":[{"delta":{}}]}\n\ndata: [DONE]\n\n',
    )
    await expect(readAll(s.pipeThrough(sseToText()))).resolves.toBe('Olá!')
  })

  it('aceita linhas terminadas em CRLF', async () => {
    const s = streamOf('data: {"choices":[{"delta":{"content":"a"}}]}\r\n\r\ndata: {"choices":[{"delta":{"content":"b"}}]}\r\n\r\n')
    await expect(readAll(s.pipeThrough(sseToText()))).resolves.toBe('ab')
  })

  it('erro no meio do stream faz a leitura rejeitar', async () => {
    const s = streamOf('data: {"choices":[{"delta":{"content":"a"}}]}\n\n', 'data: {"error":{"message":"x"}}\n\n')
    await expect(readAll(s.pipeThrough(sseToText()))).rejects.toBeInstanceOf(GatewayError)
  })
})
