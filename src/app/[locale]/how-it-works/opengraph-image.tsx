import { getTranslations } from 'next-intl/server'
import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-card'
import { locales } from '@/i18n'
import { howItWorks } from '@/content/data/how-it-works'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Kaue Mendes'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const c = howItWorks[locale === 'en' ? 'en' : 'pt']
  const tHome = await getTranslations({ locale, namespace: 'home' })

  return renderOgCard({
    eyebrow: [tHome('masthead.role'), 'LiteLLM · Cloudflare · Vercel'],
    title: c.title,
    description: c.lede,
    footer: 'kauecode.com',
  })
}
