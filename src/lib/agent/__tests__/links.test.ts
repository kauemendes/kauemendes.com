import { describe, expect, it } from '@jest/globals'
import { splitLinks } from '@/lib/agent/links'

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
})
