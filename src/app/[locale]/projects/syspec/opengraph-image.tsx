import { getProjects } from '@/content/data/projects'
import { Locale } from '@/i18n'
import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-card'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Kaue Mendes — project'

const PROJECT_ID = 'syspec'

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const projects = await getProjects(locale as Locale)
  const project = projects.find(p => p.id === PROJECT_ID)

  return renderOgCard({
    eyebrow: [
      locale === 'pt' ? 'Projeto' : 'Project',
      project?.category ?? '',
      project?.year ?? '',
    ].filter(Boolean),
    title: project?.title ?? 'syspec',
    description: project?.description,
  })
}
