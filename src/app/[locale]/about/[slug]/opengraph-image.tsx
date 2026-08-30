import { getContent } from '@/lib/content'
import { getTranslations } from 'next-intl/server'
import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-card'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Kaue Mendes'

export default async function Image({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const content = await getContent(slug)
  const tHome = await getTranslations({ locale, namespace: 'home' })

  return renderOgCard({
    eyebrow: [tHome('masthead.role'), tHome('masthead.location')],
    title: content.title,
    footer: 'kauecode.com',
  })
}
