import { describe, expect, it } from '@jest/globals'
import { buildKnowledge } from '@/lib/agent/knowledge'
import { resumeData as pt } from '@/content/data/resume/pt'
import { resumeData as en } from '@/content/data/resume/en'
import { projects as projectsPt } from '@/content/data/projects/pt'
import { linkCategories } from '@/content/data/links'

const base = { siteUrl: 'https://www.kauecode.com', projects: projectsPt, links: linkCategories, posts: [], about: '' }

describe('conteúdo real do agente', () => {
  it('pt: cargo atual é Coordenador de IA em banco digital, sem nome do empregador', () => {
    const t = buildKnowledge({ ...base, locale: 'pt', resume: pt })
    expect(t).toContain('Coordenador de IA — Banco digital (2026-11 a atual)')
    expect(t).not.toMatch(/\bC6\b/i)
    expect(t).not.toMatch(/Vórtx \([0-9-]+ a atual\)/)
  })

  it('en: AI Coordinator at a digital bank', () => {
    const t = buildKnowledge({ ...base, locale: 'en', resume: en })
    expect(t).toContain('AI Coordinator — Digital bank (2026-11 to present)')
    expect(t).not.toMatch(/\bC6\b/i)
    expect(t).not.toMatch(/Vórtx \([0-9-]+ to present\)/)
  })
})
