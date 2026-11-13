'use client'

import { FormEvent, useState } from 'react'
import { Frame, Button, Meta } from '@/components/ui'
import { splitLinks } from '@/lib/agent/links'
import { MAX_CHARS, MAX_USER_TURNS, type ChatMessage, type AgentLocale } from '@/lib/agent/validate'

export interface AskMeLabels {
  label: string
  placeholder: string
  send: string
  sending: string
  online: string
  offline: string
  offlineHint: string
  disclaimer: string
  error: string
  limit: string
  you: string
  me: string
  suggestions: string[]
}

interface AskMeProps {
  locale: AgentLocale
  online: boolean
  labels: AskMeLabels
}

function Status({ online, labels }: { online: boolean; labels: AskMeLabels }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 font-mono text-[9.5px] tracking-[0.1em] uppercase border px-1.5 py-[3px]',
        online ? 'border-accent text-accent font-bold' : 'border-rule text-ink-muted',
      ].join(' ')}
      role="status"
    >
      <span aria-hidden="true" className={`inline-block w-1.5 h-1.5 ${online ? 'bg-accent' : 'bg-ink-muted'}`} />
      {online ? labels.online : labels.offline}
    </span>
  )
}

const OWN_HOSTS = ['kauecode.com', 'www.kauecode.com']

function isOwnHost(href: string) {
  try {
    return OWN_HOSTS.includes(new URL(href).hostname)
  } catch {
    return false
  }
}

function Answer({ text }: { text: string }) {
  return (
    <>
      {splitLinks(text).map((p, i) =>
        p.type === 'link' ? (
          <a key={i} href={p.href} target={isOwnHost(p.href) ? undefined : '_blank'} rel="noopener noreferrer nofollow">
            {p.value}
          </a>
        ) : (
          <span key={i}>{p.value}</span>
        ),
      )}
    </>
  )
}

export function AskMe({ locale, online: initialOnline, labels }: AskMeProps) {
  const [online, setOnline] = useState(initialOnline)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(false)

  const turns = messages.filter((m) => m.role === 'user').length
  const exhausted = turns >= MAX_USER_TURNS
  const disabled = !online || pending || exhausted

  async function ask(question: string) {
    const q = question.trim()
    if (!q || disabled) return
    const history: ChatMessage[] = [...messages, { role: 'user', content: q }]
    setMessages([...history, { role: 'assistant', content: '' }])
    setInput('')
    setPending(true)
    setError(false)

    const dropDraft = () => setMessages(history.slice(0, -1))
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale, messages: history }),
      })
      if (res.status === 503) {
        dropDraft()
        setOnline(false)
        return
      }
      if (!res.ok || !res.body) throw new Error(String(res.status))

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let answer = ''
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        answer += decoder.decode(value, { stream: true })
        setMessages([...history, { role: 'assistant', content: answer }])
      }
      if (!answer.trim()) throw new Error('empty')
    } catch {
      dropDraft()
      setError(true)
    } finally {
      setPending(false)
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    void ask(input)
  }

  return (
    <Frame className="p-4 md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <label htmlFor="ask-me" className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-ink">
          {labels.label}
        </label>
        <Status online={online} labels={labels} />
      </div>

      {messages.length > 0 && (
        <ol className="mb-4 space-y-3" aria-live="polite">
          {messages.map((m, i) => (
            <li key={i} className="rule-dash pt-3 first:border-t-0 first:pt-0">
              <p className="font-mono text-[9.5px] tracking-[0.14em] uppercase text-ink-muted mb-1">
                {m.role === 'user' ? labels.you : labels.me}
              </p>
              <p className="font-text text-[16px] leading-[1.6] text-ink-soft whitespace-pre-line">
                {m.role === 'assistant' ? (m.content ? <Answer text={m.content} /> : labels.sending) : m.content}
              </p>
            </li>
          ))}
        </ol>
      )}

      {error && <p className="font-text text-[15px] text-ink-soft mb-3">{labels.error}</p>}
      {exhausted && <p className="font-text text-[15px] text-ink-soft mb-3">{labels.limit}</p>}
      {!online && <p className="font-text text-[15px] text-ink-soft mb-3">{labels.offlineHint}</p>}

      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          id="ask-me"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={MAX_CHARS}
          placeholder={labels.placeholder}
          disabled={disabled}
          autoComplete="off"
          className="flex-1 bg-paper border-2 border-ink px-3 py-2.5 font-text text-[16px] text-ink placeholder:text-ink-muted disabled:opacity-50"
        />
        <Button type="submit" variant="solid" disabled={disabled || !input.trim()} className="disabled:opacity-50">
          {pending ? labels.sending : labels.send}
        </Button>
      </form>

      {messages.length === 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {labels.suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => void ask(s)}
              disabled={disabled}
              className="font-mono text-[10px] tracking-[0.1em] uppercase border border-rule text-ink-muted px-2 py-1 press disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <Meta size="micro" items={[labels.disclaimer]} className="mt-4" />
    </Frame>
  )
}
