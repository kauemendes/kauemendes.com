import { getPostContent, getPostsList } from '@/lib'
import { parseEntryTitle, stampDate, readingMinutes } from '@/lib/utils'
import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-card'
import { locales } from '@/i18n'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Kaue Mendes — blog post'

export async function generateStaticParams() {
  const params = []
  for (const locale of locales) {
    const posts = await getPostsList(locale)
    for (const post of posts) {
      params.push({ locale, post: post.post })
    }
  }
  return params
}

export default async function Image({ params }: { params: Promise<{ locale: string; post: string }> }) {
  const { locale, post } = await params
  const content = await getPostContent(post, locale)
  const { number, title } = parseEntryTitle(content.title)
  const isPt = locale === 'pt'

  return renderOgCard({
    marker: number ?? undefined,
    eyebrow: [
      isPt ? 'Ensaio' : 'Essay',
      stampDate(content.date),
      `${readingMinutes(content.body)} min`,
    ],
    title,
    description: content.description,
  })
}
