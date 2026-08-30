import Image from 'next/image';
import Link from 'next/link';
import { ShareLinkButton, Prose, Meta } from '@/components';
import { getPostContent, getPostsList } from '@/lib';
import { parseEntryTitle, stampDate, readingMinutes } from '@/lib/utils';
import { buildAlternates, absoluteUrl, ogLocale, alternateOgLocales, socialTitle, ogImage, SITE_NAME, SITE_URL, AUTHOR } from '@/lib/seo';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';

export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    const posts = await getPostsList(locale);
    for (const post of posts) {
      params.push({ locale, post: post.post });
    }
  }
  return params;
}

export async function generateMetadata(props: { params: Promise<{ locale: string; post: string }> }) {
  const params = await props.params;
  const { locale, post } = params;

  const content = await getPostContent(post, locale);
  if (!content) {
    return notFound();
  }

  const title = socialTitle(content.title);
  const path = `/blog/${post}`;

  /*
   * When the post declares its own share image we use it; otherwise the
   * branded card from opengraph-image.tsx applies automatically. Setting
   * `images` here is what suppresses the file-based route.
   */
  const declaredImage = content.image_og ?? undefined;

  return {
    title,
    description: content.description,
    keywords: [...content.post.split('-'), 'blog', 'Kaue Mendes'],
    authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
    // Without this the locale layout's `canonical: /${locale}` is inherited and
    // every post tells crawlers the real page is the home page.
    alternates: buildAlternates(locale, path),
    openGraph: {
      type: 'article',
      title,
      description: content.description,
      url: absoluteUrl(locale, path),
      siteName: SITE_NAME,
      locale: ogLocale(locale),
      alternateLocale: alternateOgLocales(locale),
      publishedTime: new Date(content.date).toISOString(),
      authors: [AUTHOR.name],
      ...(declaredImage ? { images: ogImage(declaredImage, title) } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: content.description,
      ...(declaredImage ? { images: [declaredImage] } : {}),
    },
  }
}

export default async function PostPage(props: { params: Promise<{ locale: string; post: string }> }) {
  const params = await props.params;
  const { locale, post } = params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'blog' });
  const tHome = await getTranslations({ locale, namespace: 'home' });
  const content = await getPostContent(post, locale);
  const allPosts = await getPostsList(locale);

  if (!content) {
    return notFound();
  }

  // Posts are sorted newest first, so the lower index is the newer entry.
  const currentIndex = allPosts.findIndex(p => p.post === post);
  const newerPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const olderPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const { number, title } = parseEntryTitle(content.title);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: content.description,
    datePublished: new Date(content.date).toISOString(),
    dateModified: new Date(content.date).toISOString(),
    inLanguage: locale === 'pt' ? 'pt-BR' : 'en',
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
    publisher: { '@type': 'Person', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(locale, `/blog/${post}`) },
    image: content.image_og
      ? `${SITE_URL}${content.image_og}`
      : `${absoluteUrl(locale, `/blog/${post}`)}/opengraph-image`,
  };

  return (
    <div className="max-w-3xl mx-auto px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-8 pb-10">
        <Link
          href={`/${locale}/blog`}
          className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-muted hover:text-accent transition-colors duration-150"
        >
          &larr; {t('backToIndex')}
        </Link>
      </div>

      <article>
        <header>
          <Meta
            items={[
              number ? <span key="n" className="text-accent font-bold">№ {number}</span> : null,
              stampDate(content.date),
              tHome('kind.essay'),
              tHome('readTime', { minutes: readingMinutes(content.body) }),
              t('alsoIn'),
            ]}
            className="mb-4"
          />

          <h1 className="font-display text-[clamp(2.1rem,6vw,3.4rem)] leading-[1.02] tracking-[-0.015em] text-ink mb-5">
            {title}
          </h1>

          <p className="font-text italic text-[17px] md:text-[18px] leading-[1.62] text-ink-soft max-w-[56ch] mb-8">
            {content.description}
          </p>
        </header>

        <hr className="rule-solid mb-10" />

        {content.image_post && (
          <figure className="mb-10">
            <div className="relative w-full aspect-[2/1] border-2 border-ink overflow-hidden">
              <Image
                src={content.image_post}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          </figure>
        )}

        <Prose html={content.body} className="drop-cap" />
      </article>

      {/* Footer strip — share and chronological neighbours in one rail. */}
      <div className="rule-solid mt-16 pt-5 pb-4 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-muted">
          {t('publishedOn')} {stampDate(content.date)}
        </p>
        <ShareLinkButton />
      </div>

      <nav className="rule-dash grid grid-cols-1 sm:grid-cols-2 gap-px pb-20">
        {newerPost && (
          <Link
            href={`/${locale}/blog/${newerPost.post}`}
            className="group py-5 pr-4 no-underline"
          >
            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-muted mb-2">
              &larr; {t('newer')}
            </p>
            <p className="font-display text-[1.2rem] leading-[1.15] text-ink group-hover:text-accent transition-colors duration-150">
              {parseEntryTitle(newerPost.title).title}
            </p>
          </Link>
        )}
        {olderPost && (
          <Link
            href={`/${locale}/blog/${olderPost.post}`}
            className="group py-5 sm:text-right sm:border-l sm:border-dashed sm:border-rule sm:pl-4 no-underline"
          >
            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-muted mb-2">
              {t('older')} &rarr;
            </p>
            <p className="font-display text-[1.2rem] leading-[1.15] text-ink group-hover:text-accent transition-colors duration-150">
              {parseEntryTitle(olderPost.title).title}
            </p>
          </Link>
        )}
      </nav>
    </div>
  );
}
