import { describe, expect, it } from '@jest/globals'
import { buildKnowledge, KnowledgeSources } from '@/lib/agent/knowledge'
import type { ResumeData } from '@/lib/types/resume'

const resume: ResumeData = {
  personal: {
    name: 'Kaue Mendes',
    title: 'Coordenador de IA',
    email: 'segredo@example.com',
    phone: '+55 11 0000 0000',
    location: 'São Paulo, Brasil',
    summary: 'Resumo de teste.',
  },
  social: [],
  experience: [
    {
      id: 'x',
      company: 'Empresa X',
      position: 'Engenheiro DevOps',
      startDate: new Date('2020-03-01'),
      endDate: new Date('2022-06-30'),
      location: 'Remoto',
      description: 'Descrição X.',
      responsibilities: ['Resp A'],
      achievements: ['Conquista B'],
      technologies: ['Kubernetes'],
      type: 'full-time',
    },
    {
      id: 'y',
      company: 'Banco digital',
      position: 'Coordenador de IA',
      startDate: new Date('2026-11-23'),
      location: 'São Paulo, Brasil',
      description: 'Descrição Y.',
      responsibilities: [],
      technologies: ['LLM'],
      type: 'full-time',
    },
  ],
  education: [
    { id: 'e', institution: 'Uni', degree: 'Tecnólogo', field: 'Redes', startDate: new Date('2007-01-01'), endDate: new Date('2009-12-31'), location: 'SP' },
  ],
  skills: [
    { name: 'Cloud', skills: [{ name: 'AWS', level: 8, yearsExperience: 6, category: 'Cloud' }] },
  ],
  projects: [],
  achievements: [],
  certifications: [{ id: 'c', name: 'CKA', issuer: 'CNCF', issueDate: new Date('2021-01-01') }],
  languages: [{ name: 'Inglês', level: 'professional' }],
  volunteer: [],
  lastUpdated: new Date('2026-11-13'),
  version: '1',
}

const sources: KnowledgeSources = {
  locale: 'pt',
  siteUrl: 'https://www.kauecode.com',
  resume,
  projects: [
    { title: 'Syspec', description: 'Builder.', image_banner: '', id: 'syspec', category: 'Ferramentas', technologies: ['TS'], features: [], status: 'Ativo', demo: 'https://syspec.dev', year: '2026' },
  ],
  links: [
    { key: 'social', title: 'Social', links: [{ name: 'LinkedIn', url: '/linkedin' }, { name: 'Site', url: 'https://example.org' }] },
  ],
  posts: [{ title: 'Post Um', description: 'Desc.', url: 'https://www.kauecode.com/pt/blog/post-um', date: '2026-01-02' }],
  about: 'Texto do about.',
}

describe('buildKnowledge', () => {
  const text = buildKnowledge(sources)

  it('inclui experiências com período, atual sem data de fim', () => {
    expect(text).toContain('Engenheiro DevOps — Empresa X (2020-03 a 2022-06)')
    expect(text).toContain('Coordenador de IA — Banco digital (2026-11 a atual)')
    expect(text).toContain('Resp A')
    expect(text).toContain('Conquista B')
  })

  it('inclui habilidades, formação, certificações e idiomas', () => {
    expect(text).toContain('AWS (6 anos)')
    expect(text).toContain('Tecnólogo em Redes — Uni')
    expect(text).toContain('CKA — CNCF')
    expect(text).toContain('Inglês')
  })

  it('inclui projetos, posts e links com URL absoluta', () => {
    expect(text).toContain('https://www.kauecode.com/pt/projects/syspec')
    expect(text).toContain('https://syspec.dev')
    expect(text).toContain('Post Um (2026-01-02): Desc. https://www.kauecode.com/pt/blog/post-um')
    expect(text).toContain('LinkedIn: https://www.kauecode.com/linkedin')
    expect(text).toContain('Site: https://example.org')
  })

  it('inclui o about e as páginas de origem', () => {
    expect(text).toContain('Texto do about.')
    expect(text).toContain('https://www.kauecode.com/pt/resume')
  })

  it('não expõe e-mail nem telefone', () => {
    expect(text).not.toContain('segredo@example.com')
    expect(text).not.toContain('0000 0000')
  })

  it('usa rótulos em inglês no locale en', () => {
    const en = buildKnowledge({ ...sources, locale: 'en' })
    expect(en).toContain('(2026-11 to present)')
    expect(en).toContain('# Experience')
  })
})
