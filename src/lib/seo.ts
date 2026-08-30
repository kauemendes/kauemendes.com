import { Locale, locales } from '@/i18n'

/** Canonical origin. Must match `metadataBase` in the root layout. */
export const SITE_URL = 'https://www.kauecode.com'

export const SITE_NAME = 'Kaue Mendes'

export const AUTHOR = {
  name: 'Kaue Mendes de Freitas',
  url: 'https://www.linkedin.com/in/kauemendes/',
} as const

const ogLocales: Record<string, string> = {
  pt: 'pt_BR',
  en: 'en_US',
}

export function ogLocale(locale: string): string {
  return ogLocales[locale] ?? 'en_US'
}

export function alternateOgLocales(locale: string): string[] {
  return locales.filter((l) => l !== locale).map(ogLocale)
}

/**
 * Per-page canonical and hreflang set.
 *
 * Every page that renders its own `generateMetadata` MUST call this. Next
 * merges parent metadata into the child, so a page that omits `alternates`
 * silently inherits the locale layout's `canonical: /${locale}` and tells
 * crawlers the real page is the home page — which is exactly what broke
 * LinkedIn previews for every blog post and project.
 *
 * @param path Route below the locale segment, e.g. `/blog/my-post`. Empty for home.
 */
export function buildAlternates(locale: string, path = '') {
  const languages: Record<string, string> = {}
  for (const l of locales) {
    // hreflang wants a region-qualified tag for Portuguese.
    languages[l === 'pt' ? 'pt-BR' : l] = `/${l}${path}`
  }

  return {
    canonical: `/${locale}${path}`,
    languages,
  }
}

/** Absolute URL for a route below the locale segment. */
export function absoluteUrl(locale: string, path = ''): string {
  return `${SITE_URL}/${locale}${path}`
}

/**
 * Social cards should not carry the `"10. "` sequence prefix that blog post
 * titles use for the on-site index.
 */
export function socialTitle(rawTitle: string): string {
  return rawTitle.replace(/^\s*\d{1,3}\.\s+/, '').trim()
}

const mimeByExtension: Record<string, string> = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
}

/**
 * Shared `openGraph.images` entry. LinkedIn only renders the large card when
 * dimensions are declared and the image is at least 1200x627.
 */
export function ogImage(url: string, alt: string) {
  const extension = url.split('.').pop()?.toLowerCase() ?? ''
  return [
    {
      url,
      width: 1200,
      height: 630,
      alt,
      type: mimeByExtension[extension] ?? 'image/png',
    },
  ]
}

export type { Locale }
