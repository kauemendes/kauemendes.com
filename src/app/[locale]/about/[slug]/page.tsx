import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { getContent } from '@/lib/content';
import { Prose } from '@/components';
import { buildAlternates, absoluteUrl, ogLocale, alternateOgLocales, SITE_NAME } from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const content = await getContent(slug);
  const path = `/about/${slug}`;

  return {
    title: content.title,
    alternates: buildAlternates(locale, path),
    openGraph: {
      type: 'profile',
      title: content.title,
      url: absoluteUrl(locale, path),
      siteName: SITE_NAME,
      locale: ogLocale(locale),
      alternateLocale: alternateOgLocales(locale),
    },
  };
}

export default async function AboutSlugPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'about' });
  const content = await getContent(slug);

  return (
    <div className="max-w-3xl mx-auto px-6">

      <div className="pt-8 pb-10">
        <Link
          href={`/${locale}/about`}
          className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-muted hover:text-accent transition-colors duration-150"
        >
          &larr; {t('backToAbout')}
        </Link>
      </div>

      <h1 className="font-display text-[clamp(2.1rem,6vw,3.4rem)] leading-[1.02] tracking-[-0.015em] text-ink mb-8">
        {content.title}
      </h1>

      <hr className="rule-solid mb-10" />

      <article className="pb-20">
        <Prose html={content.body} />
      </article>
    </div>
  );
}
