import 'server-only'
import { getResumeData } from '@/content/data/resume'
import { getProjects } from '@/content/data/projects'
import { linkCategories } from '@/content/data/links'
import { getPostsList, getContent } from '@/lib/content'
import { parseEntryTitle } from '@/lib/utils'
import { SITE_URL } from '@/lib/seo'
import { buildKnowledge } from '@/lib/agent/knowledge'
import type { AgentLocale } from '@/lib/agent/validate'

const stripHtml = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()

const cache = new Map<AgentLocale, Promise<string>>()

async function build(locale: AgentLocale): Promise<string> {
  const [resume, projects, posts, personal, professional] = await Promise.all([
    getResumeData(locale),
    getProjects(locale),
    getPostsList(locale),
    getContent('personal'),
    getContent('professional'),
  ])

  return buildKnowledge({
    locale,
    siteUrl: SITE_URL,
    resume,
    projects,
    links: linkCategories,
    posts: posts.map((p) => ({
      title: parseEntryTitle(p.title).title,
      description: p.description,
      url: `${SITE_URL}/${locale}/blog/${p.post}`,
      date: p.date.slice(0, 10),
    })),
    about: `${stripHtml(professional.body)}\n\n${stripHtml(personal.body)}`,
  })
}

/** O conteúdo só muda com deploy, então o contexto é montado uma vez por instância e locale. */
export function loadKnowledge(locale: AgentLocale): Promise<string> {
  let hit = cache.get(locale)
  if (!hit) {
    hit = build(locale)
    cache.set(locale, hit)
    hit.catch(() => cache.delete(locale))
  }
  return hit
}
