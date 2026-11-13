import { describe, expect, it } from '@jest/globals'
import { parseAskRequest, MAX_CHARS, MAX_USER_TURNS } from '@/lib/agent/validate'

const user = (content: string) => ({ role: 'user', content })
const bot = (content: string) => ({ role: 'assistant', content })

describe('parseAskRequest', () => {
  it('aceita uma pergunta simples e apara espaços', () => {
    const r = parseAskRequest({ locale: 'pt', messages: [user('  oi  ')] })
    expect(r).toEqual({ ok: true, value: { locale: 'pt', messages: [{ role: 'user', content: 'oi' }] } })
  })

  it('rejeita locale desconhecido', () => {
    expect(parseAskRequest({ locale: 'es', messages: [user('oi')] }).ok).toBe(false)
  })

  it('rejeita corpo que não é objeto e lista vazia', () => {
    expect(parseAskRequest(null).ok).toBe(false)
    expect(parseAskRequest({ locale: 'pt', messages: [] }).ok).toBe(false)
  })

  it('exige alternância começando por user e terminando em user', () => {
    expect(parseAskRequest({ locale: 'pt', messages: [bot('x')] }).ok).toBe(false)
    expect(parseAskRequest({ locale: 'pt', messages: [user('a'), user('b')] }).ok).toBe(false)
    expect(parseAskRequest({ locale: 'pt', messages: [user('a'), bot('b')] }).ok).toBe(false)
    expect(parseAskRequest({ locale: 'pt', messages: [user('a'), bot('b'), user('c')] }).ok).toBe(true)
  })

  it('rejeita pergunta acima do limite de caracteres', () => {
    expect(parseAskRequest({ locale: 'en', messages: [user('x'.repeat(MAX_CHARS + 1))] })).toEqual({ ok: false, error: 'length' })
    expect(parseAskRequest({ locale: 'en', messages: [user('x'.repeat(MAX_CHARS))] }).ok).toBe(true)
  })

  it('rejeita resposta do assistente gigante (injeção pelo histórico)', () => {
    expect(parseAskRequest({ locale: 'pt', messages: [user('a'), bot('x'.repeat(2001)), user('c')] })).toEqual({ ok: false, error: 'length' })
  })

  it('aceita resposta do assistente com exatamente 2000 caracteres', () => {
    expect(parseAskRequest({ locale: 'pt', messages: [user('a'), bot('x'.repeat(2000)), user('c')] }).ok).toBe(true)
  })

  it('rejeita histórico longo demais antes de validar cada mensagem', () => {
    const many = Array.from({ length: 2 * MAX_USER_TURNS }, (_, i) => (i % 2 === 0 ? user('q') : bot('a')))
    expect(parseAskRequest({ locale: 'pt', messages: many })).toEqual({ ok: false, error: 'turns' })
    // sem a checagem antecipada, o erro seria o da primeira mensagem inválida
    expect(parseAskRequest({ locale: 'pt', messages: [...many, 42] })).toEqual({ ok: false, error: 'turns' })
  })

  it('limita o número de trocas', () => {
    const msgs: { role: string; content: string }[] = []
    for (let i = 0; i < MAX_USER_TURNS; i++) {
      msgs.push(user(`q${i}`))
      if (i < MAX_USER_TURNS - 1) msgs.push(bot(`a${i}`))
    }
    expect(parseAskRequest({ locale: 'pt', messages: msgs }).ok).toBe(true)
    expect(parseAskRequest({ locale: 'pt', messages: [...msgs, bot('a'), user('extra')] })).toEqual({ ok: false, error: 'turns' })
  })
})
