import { getTranslations } from 'next-intl/server'
import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-card'
import { locales } from '@/i18n'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Kaue Mendes — Infrastructure Coordinator & Cloud Architect'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

/**
 * Site-level share card. Next inherits this into every route under [locale]
 * that does not declare its own, so /blog, /projects, /links, /about, /consult
 * and /resume all get a branded card instead of no image at all.
 */
export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })

  return renderOgCard({
    eyebrow: [t('masthead.role'), t('masthead.location')],
    title: 'Kaue Mendes',
    description: t('masthead.statement'),
    footer: 'kauecode.com',
  })
}
