import type { ResumeData } from '@/lib/types/resume'
import type { Project } from '@/content/data/projects'
import type { LinkCategory } from '@/content/data/links'
import type { AgentLocale } from '@/lib/agent/validate'

export interface KnowledgePost {
  title: string
  description: string
  url: string
  date: string
}

export interface KnowledgeSources {
  locale: AgentLocale
  siteUrl: string
  resume: ResumeData
  projects: Project[]
  links: LinkCategory[]
  posts: KnowledgePost[]
  about: string
}

const LABELS = {
  pt: {
    profile: 'Perfil', experience: 'Experiência', skills: 'Habilidades', education: 'Formação',
    certifications: 'Certificações', languages: 'Idiomas', projects: 'Projetos', links: 'Links',
    posts: 'Posts do blog', about: 'Sobre mim', page: 'Página', to: 'a', present: 'atual',
    years: 'anos', responsibilities: 'Responsabilidades', achievements: 'Conquistas',
    tech: 'Tecnologias', in: 'em', role: 'Cargo', location: 'Local',
  },
  en: {
    profile: 'Profile', experience: 'Experience', skills: 'Skills', education: 'Education',
    certifications: 'Certifications', languages: 'Languages', projects: 'Projects', links: 'Links',
    posts: 'Blog posts', about: 'About me', page: 'Page', to: 'to', present: 'present',
    years: 'years', responsibilities: 'Responsibilities', achievements: 'Achievements',
    tech: 'Technologies', in: 'in', role: 'Role', location: 'Location',
  },
} as const

const month = (d: Date) => d.toISOString().slice(0, 7)
const absolute = (siteUrl: string, url: string) => (/^https?:\/\//.test(url) ? url : `${siteUrl}${url}`)

const isPhoneLink = (l: { name: string; url: string }) =>
  /whatsapp|wa\.me/i.test(l.url) || l.name.trim().toLowerCase() === 'whatsapp'

/** Contexto do agente. Deliberadamente sem e-mail e telefone: contato é pelos links. */
export function buildKnowledge(s: KnowledgeSources): string {
  const L = LABELS[s.locale]
  const page = (path: string) => `${s.siteUrl}/${s.locale}${path}`
  const { personal } = s.resume
  const out: string[] = []

  out.push(`# ${L.profile}`)
  out.push(`${personal.name}. ${L.role}: ${personal.title}. ${L.location}: ${personal.location}.`)
  out.push(personal.summary)
  out.push(`${L.page}: ${page('/about')}`)

  out.push('', `# ${L.experience} (${L.page}: ${page('/resume')})`)
  for (const e of s.resume.experience) {
    const end = e.endDate ? month(e.endDate) : L.present
    out.push(`- ${e.position} — ${e.company} (${month(e.startDate)} ${L.to} ${end}), ${e.location}`)
    out.push(`  ${e.description}`)
    if (e.responsibilities.length) out.push(`  ${L.responsibilities}: ${e.responsibilities.join('; ')}`)
    if (e.achievements?.length) out.push(`  ${L.achievements}: ${e.achievements.join('; ')}`)
    if (e.technologies.length) out.push(`  ${L.tech}: ${e.technologies.join(', ')}`)
  }

  out.push('', `# ${L.skills}`)
  for (const c of s.resume.skills) {
    out.push(`- ${c.name}: ${c.skills.map((k) => `${k.name} (${k.yearsExperience} ${L.years})`).join(', ')}`)
  }

  out.push('', `# ${L.education}`)
  for (const e of s.resume.education) {
    const end = e.endDate ? e.endDate.getUTCFullYear() : L.present
    out.push(`- ${e.degree} ${L.in} ${e.field} — ${e.institution} (${e.startDate.getUTCFullYear()}–${end})`)
  }

  if (s.resume.certifications.length) {
    out.push('', `# ${L.certifications}`)
    for (const c of s.resume.certifications) out.push(`- ${c.name} — ${c.issuer}`)
  }

  if (s.resume.languages.length) {
    out.push('', `# ${L.languages}`)
    out.push(s.resume.languages.map((l) => `${l.name} (${l.level})`).join(', '))
  }

  out.push('', `# ${L.projects} (${L.page}: ${page('/projects')})`)
  for (const p of s.projects) {
    const extra = [p.demo, p.github, p.marketplace].filter(Boolean).join(' ')
    out.push(`- ${p.title} (${p.year}, ${p.status}): ${p.description} ${L.tech}: ${p.technologies.join(', ')}. ${page(`/projects/${p.id}`)} ${extra}`.trim())
  }

  out.push('', `# ${L.links} (${L.page}: ${page('/links')})`)
  for (const c of s.links) {
    for (const l of c.links) {
      if (isPhoneLink(l)) continue
      out.push(`- ${l.name}: ${absolute(s.siteUrl, l.url)}`)
    }
  }

  out.push('', `# ${L.posts} (${L.page}: ${page('/blog')})`)
  for (const p of s.posts) out.push(`- ${p.title} (${p.date}): ${p.description} ${p.url}`)

  out.push('', `# ${L.about}`, s.about.trim())

  return out.join('\n')
}
