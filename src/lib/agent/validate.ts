export type ChatRole = 'user' | 'assistant'
export type AgentLocale = 'pt' | 'en'

export interface ChatMessage {
  role: ChatRole
  content: string
}

export interface AskRequest {
  locale: AgentLocale
  messages: ChatMessage[]
}

export const MAX_USER_TURNS = 5
export const MAX_CHARS = 500
/** Respostas do assistente voltam do navegador; o teto impede usar o histórico para injetar texto longo. */
export const MAX_ASSISTANT_CHARS = 2000

export type ParseResult = { ok: true; value: AskRequest } | { ok: false; error: string }

const fail = (error: string): ParseResult => ({ ok: false, error })

export function parseAskRequest(body: unknown): ParseResult {
  if (!body || typeof body !== 'object') return fail('body')
  const { locale, messages } = body as Record<string, unknown>
  if (locale !== 'pt' && locale !== 'en') return fail('locale')
  if (!Array.isArray(messages) || messages.length === 0) return fail('messages')

  const out: ChatMessage[] = []
  for (const [i, raw] of messages.entries()) {
    if (!raw || typeof raw !== 'object') return fail('message')
    const { role, content } = raw as Record<string, unknown>
    const expected: ChatRole = i % 2 === 0 ? 'user' : 'assistant'
    if (role !== expected) return fail('role')
    if (typeof content !== 'string') return fail('content')
    const text = content.trim()
    if (text.length === 0) return fail('content')
    const limit = role === 'user' ? MAX_CHARS : MAX_ASSISTANT_CHARS
    if (text.length > limit) return fail('length')
    out.push({ role: expected, content: text })
  }

  if (out[out.length - 1].role !== 'user') return fail('last')
  if (out.filter((m) => m.role === 'user').length > MAX_USER_TURNS) return fail('turns')

  return { ok: true, value: { locale, messages: out } }
}
