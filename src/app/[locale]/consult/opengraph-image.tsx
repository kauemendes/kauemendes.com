import { getTranslations } from 'next-intl/server'
import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-card'
import { locales } from '@/i18n'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Kaue Mendes'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'consult' })
  const tHome = await getTranslations({ locale, namespace: 'home' })

  return renderOgCard({
    eyebrow: [tHome('masthead.role'), tHome('masthead.location')],
    title: t('title'),
    description: t('indexSubtitle'),
    footer: 'kauecode.com',
  })
}
