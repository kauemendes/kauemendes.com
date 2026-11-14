import { describe, expect, it } from '@jest/globals'
import { splitLinks, ALLOWED_LINK_HOSTS } from '@/lib/agent/links'

describe('splitLinks', () => {
  it('separa URL solta e tira pontuação final', () => {
    expect(splitLinks('Veja https://www.kauecode.com/pt/resume.')).toEqual([
      { type: 'text', value: 'Veja ' },
      { type: 'link', value: 'https://www.kauecode.com/pt/resume', href: 'https://www.kauecode.com/pt/resume' },
      { type: 'text', value: '.' },
    ])
  })

  it('aceita link em markdown', () => {
    expect(splitLinks('no [LinkedIn](https://www.linkedin.com/in/kauemendes)!')).toEqual([
      { type: 'text', value: 'no ' },
      { type: 'link', value: 'LinkedIn', href: 'https://www.linkedin.com/in/kauemendes' },
      { type: 'text', value: '!' },
    ])
  })

  it('texto sem link volta inteiro', () => {
    expect(splitLinks('oi')).toEqual([{ type: 'text', value: 'oi' }])
  })

  it('ignora esquemas que não são http(s)', () => {
    expect(splitLinks('[x](javascript:alert(1))')).toEqual([{ type: 'text', value: '[x](javascript:alert(1))' }])
  })

  it('host fora da allowlist vira texto: URL solta fica como está', () => {
    expect(splitLinks('veja https://evil.example/x agora')).toEqual([{ type: 'text', value: 'veja https://evil.example/x agora' }])
  })

  it('host fora da allowlist em markdown vira "label (url)"', () => {
    expect(splitLinks('[clique](https://evil.example/x)')).toEqual([{ type: 'text', value: 'clique (https://evil.example/x)' }])
  })

  it('não confunde subdomínio ou sufixo com host permitido', () => {
    expect(splitLinks('https://github.com.evil.example/x')).toEqual([{ type: 'text', value: 'https://github.com.evil.example/x' }])
  })

  it('exporta a allowlist', () => {
    expect([...ALLOWED_LINK_HOSTS].sort()).toEqual(
      ['github.com', 'kauecode.com', 'linkedin.com', 'marketplace.visualstudio.com', 'syspec.dev', 'www.kauecode.com', 'www.linkedin.com'],
    )
  })
})
