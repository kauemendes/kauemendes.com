import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

import { getPostsList } from '@/lib';
import { parseEntryTitle, stampDate, readingMinutes } from '@/lib/utils';
import { Entry } from '@/components';
import { buildAlternates, absoluteUrl, ogLocale, alternateOgLocales, SITE_NAME } from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });

  return {
    title: t('title'),
    description: t('indexSubtitle'),
    alternates: buildAlternates(locale, '/blog'),
    openGraph: {
      type: 'website',
      title: t('index'),
      description: t('indexSubtitle'),
      url: absoluteUrl(locale, '/blog'),
      siteName: SITE_NAME,
      locale: ogLocale(locale),
      alternateLocale: alternateOgLocales(locale),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('index'),
      description: t('indexSubtitle'),
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'blog' });
  const tHome = await getTranslations({ locale, namespace: 'home' });
  const posts = await getPostsList(locale);

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto px-6">

      <header className="pt-14 pb-8 md:pt-20 md:pb-10">
        <h1 className="font-display text-[clamp(2.4rem,7vw,4rem)] leading-[0.98] tracking-[-0.02em] text-ink mb-4">
          {t('index')}
        </h1>
        <p className="font-mono text-[11.5px] tracking-[0.12em] uppercase text-ink-muted">
          {t('indexSubtitle')}
        </p>
      </header>

      <section className="rule-solid pt-4 pb-16">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-3">
          <h2 className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink font-bold">
            {tHome('index.title')}
          </h2>
          <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink-muted">
            {t('count', { count: posts.length })}
          </p>
        </div>

        {posts.length > 0 ? (
          <div>
            {posts.map((post) => {
              const { number, title } = parseEntryTitle(post.title);
              return (
                <Entry
                  key={post.post}
                  href={`/${locale}/blog/${post.post}`}
                  marker={number ? `№ ${number}` : tHome('kind.essay')}
                  stamp={stampDate(post.date)}
                  meta={[
                    tHome('kind.essay'),
                    tHome('readTime', { minutes: readingMinutes(post.body) }),
                    tHome('bothLocales'),
                  ]}
                  title={title}
                  description={post.description}
                  numbered={Boolean(number)}
                />
              );
            })}
          </div>
        ) : (
          <p className="font-text text-ink-soft py-8">{tHome('index.empty')}</p>
        )}
      </section>
    </div>
  );
}
