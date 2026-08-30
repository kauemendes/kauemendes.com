import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

import { linkCategories } from '@/content/data/links';
import { socialLinks } from '@/content/data/social';
import { LinkCard } from './components';
import { buildAlternates, absoluteUrl, ogLocale, alternateOgLocales, SITE_NAME } from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'links' });

  return {
    title: t('title'),
    description: t('indexSubtitle'),
    alternates: buildAlternates(locale, '/links'),
  };
}

export default async function LinksPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'links' });

  return (
    <div className="max-w-4xl mx-auto px-6">

      <header className="pt-14 pb-8 md:pt-20 md:pb-10">
        <h1 className="font-display text-[clamp(2.4rem,7vw,4rem)] leading-[0.98] tracking-[-0.02em] text-ink mb-4">
          {t('title')}
        </h1>
        <p className="font-mono text-[11.5px] tracking-[0.12em] uppercase text-ink-muted">
          {t('indexSubtitle')}
        </p>
      </header>

      {/* Categories are keyed, so the label lookup no longer depends on
          matching an English title string. */}
      {linkCategories.map((category) => (
        <section key={category.key} className="rule-solid pt-4 pb-10">
          <h2 className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink font-bold pb-5">
            {t(`categories.${category.key}`)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.links.map((link) => (
              <LinkCard key={link.name} link={link} locale={locale} />
            ))}
          </div>
        </section>
      ))}

      <section className="rule-solid pt-4 pb-20">
        <h2 className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink font-bold pb-5">
          {t('elsewhere')}
        </h2>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.name} className="rule-dash first:border-t-0">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between gap-4 py-3 no-underline group"
              >
                <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink group-hover:text-accent transition-colors duration-150">
                  {link.name}
                </span>
                <span className="font-mono text-[11px] text-ink-muted truncate">
                  {link.username} <span aria-hidden="true">&#8599;</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
