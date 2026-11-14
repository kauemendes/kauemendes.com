import { describe, expect, it } from '@jest/globals'
import { buildSystemPrompt, LINKEDIN_URL } from '@/lib/agent/prompt'

describe('buildSystemPrompt', () => {
  it('pt: primeira pessoa, só com o contexto, empregador anônimo, LinkedIn de fallback', () => {
    const p = buildSystemPrompt('pt', 'CONTEXTO-XYZ')
    expect(p).toContain('primeira pessoa')
    expect(p).toContain('banco digital')
    expect(p).toContain(LINKEDIN_URL)
    expect(p).toContain('CONTEXTO-XYZ')
    expect(p.indexOf('CONTEXTO-XYZ')).toBeGreaterThan(p.indexOf('<contexto>'))
    expect(p).toContain('nem emoji')
    expect(p).toContain('hobby')
  })

  it('en: mesmas regras em inglês', () => {
    const p = buildSystemPrompt('en', 'CTX')
    expect(p).toContain('first person')
    expect(p).toContain('digital bank')
    expect(p).toContain(LINKEDIN_URL)
    expect(p).toContain('do not use emoji')
    expect(p).toContain('hobby')
  })
})
