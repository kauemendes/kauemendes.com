export type Part = { type: 'text'; value: string } | { type: 'link'; value: string; href: string }

export const ALLOWED_LINK_HOSTS: readonly string[] = [
  'kauecode.com',
  'www.kauecode.com',
  'linkedin.com',
  'www.linkedin.com',
  'github.com',
  'syspec.dev',
  'marketplace.visualstudio.com',
]

export const OWN_HOSTS: readonly string[] = ['kauecode.com', 'www.kauecode.com']

const isAllowed = (href: string) => {
  try {
    return ALLOWED_LINK_HOSTS.includes(new URL(href).hostname)
  } catch {
    return false
  }
}

const PATTERN = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<>()]+)/g
const TRAILING = /[.,;:!?]+$/

/** Quebra a resposta do agente em texto e links http(s) para renderizar como âncoras. */
export function splitLinks(text: string): Part[] {
  const parts: Part[] = []
  let last = 0
  const pushText = (value: string) => {
    if (!value) return
    const prev = parts[parts.length - 1]
    if (prev?.type === 'text') prev.value += value
    else parts.push({ type: 'text', value })
  }

  for (const m of text.matchAll(PATTERN)) {
    const start = m.index ?? 0
    pushText(text.slice(last, start))
    if (m[1] && m[2]) {
      if (isAllowed(m[2])) parts.push({ type: 'link', value: m[1], href: m[2] })
      else pushText(`${m[1]} (${m[2]})`)
      last = start + m[0].length
    } else {
      const raw = m[3]
      const trail = raw.match(TRAILING)?.[0] ?? ''
      const url = raw.slice(0, raw.length - trail.length)
      if (isAllowed(url)) parts.push({ type: 'link', value: url, href: url })
      else pushText(url)
      last = start + url.length
    }
  }
  pushText(text.slice(last))
  return parts
}
