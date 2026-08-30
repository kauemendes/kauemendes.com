import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

import { getPostsList } from '@/lib';
import { parseEntryTitle, stampDate, readingMinutes } from '@/lib/utils';
import { getProjects } from '@/content/data/projects';
import { Locale } from '@/i18n';
import { Entry, ButtonLink } from '@/components';

interface PageProps {
  params: Promise<{ locale: string }>;
}

/** How many rows the home index shows before deferring to the section pages. */
const INDEX_LIMIT = 8;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const isPt = locale === 'pt'

  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    keywords: [
      'Kaue Mendes',
      'Kaue Mendes de Freitas',
      'Enterprise AI Consulting',
      'AI Consultancy',
      'IAOps',
      'AIOps',
      'MCP',
      'Model Context Protocol',
      'Multi-Agent Systems',
      'Vibe Coding',
      'Spec-Driven Development',
      'AWS Bedrock',
      'Anthropic Claude',
      'OpenAI Codex',
      'OpenWebUI',
      'LLM on Kubernetes',
      'GPU Kubernetes',
      'AI Architecture',
      'AI Governance',
      'RAG',
      'DevOps',
      'Cloud Engineer',
      'Software Architect',
      'Tech Enthusiast',
      isPt ? 'Consultoria de IA Empresarial' : 'Enterprise AI Consulting',
      isPt ? 'IA Empresarial' : 'Enterprise AI',
      isPt ? 'Consultoria DevOps' : 'DevOps Consulting',
    ],
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
    alternates: {
      canonical: `/${locale}`,
      languages: { 'pt-BR': '/pt', en: '/en' },
    },
    openGraph: {
      title: t('homeTitle'),
      description: t('homeDescription'),
      type: 'website',
      locale: isPt ? 'pt_BR' : 'en_US',
      url: `https://kauecode.com/${locale}`,
      siteName: 'Kaue Mendes',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('homeTitle'),
      description: t('homeDescription'),
    },
  }
}

/** A post or a project, normalised into one sortable index row. */
interface IndexEntry {
  key: string
  sortDate: string
  href: string
  marker: string
  stamp: string
  meta: string[]
  title: string
  description: string
  numbered: boolean
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'home' });

  const [posts, projects] = await Promise.all([
    getPostsList(locale),
    getProjects(locale as Locale),
  ]);

  const postEntries: IndexEntry[] = posts.map((post) => {
    const { number, title } = parseEntryTitle(post.title);
    return {
      key: `post-${post.post}`,
      sortDate: post.date.slice(0, 10),
      href: `/${locale}/blog/${post.post}`,
      marker: number ? `№ ${number}` : t('kind.essay'),
      stamp: stampDate(post.date),
      meta: [t('kind.essay'), t('readTime', { minutes: readingMinutes(post.body) }), t('bothLocales')],
      title,
      description: post.description,
      numbered: Boolean(number),
    };
  });

  const projectEntries: IndexEntry[] = projects.map((project) => ({
    key: `project-${project.id}`,
    // Year-only entries lead their year in the index.
    sortDate: `${project.year}-12-31`,
    href: `/${locale}/projects/${project.id}`,
    marker: t('kind.project'),
    stamp: project.year,
    meta: [project.category, project.status],
    title: project.title,
    description: project.description,
    numbered: false,
  }));

  const entries = [...postEntries, ...projectEntries].sort((a, b) =>
    b.sortDate.localeCompare(a.sortDate)
  );

  const visible = entries.slice(0, INDEX_LIMIT);

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto px-6">

      {/* Masthead */}
      <header className="pt-16 pb-10 md:pt-24 md:pb-14">
        <h1 className="font-display text-[clamp(2.6rem,9vw,5rem)] leading-[0.95] tracking-[-0.02em] text-ink mb-4">
          Kaue Mendes
        </h1>
        <p className="font-mono text-[11.5px] tracking-[0.12em] uppercase text-ink-muted flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
          <span>{t('masthead.role')}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{t('masthead.location')}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{t('masthead.since')}</span>
        </p>
        <p className="font-text text-[17px] md:text-[19px] leading-[1.6] text-ink-soft max-w-[52ch]">
          {t('masthead.statement')}
        </p>
      </header>

      {/* Index */}
      <section className="rule-solid pt-4 pb-16">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-3">
          <h2 className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink-muted">
            <span className="text-ink font-bold">{t('index.title')}</span>
            {' — '}
            {t('index.subtitle')}
          </h2>
          <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink-muted">
            {t('index.count', { count: entries.length })}
          </p>
        </div>

        {visible.length > 0 ? (
          <>
            <div>
              {visible.map((entry) => (
                <Entry
                  key={entry.key}
                  href={entry.href}
                  marker={entry.marker}
                  stamp={entry.stamp}
                  meta={entry.meta}
                  title={entry.title}
                  description={entry.description}
                  numbered={entry.numbered}
                />
              ))}
            </div>

            {entries.length > visible.length && (
              <div className="rule-dash pt-6 mt-1">
                <ButtonLink href={`/${locale}/blog`}>
                  {t('index.viewAll', { count: entries.length })}
                </ButtonLink>
              </div>
            )}
          </>
        ) : (
          <p className="font-text text-ink-soft py-8">{t('index.empty')}</p>
        )}
      </section>
    </div>
  )
}
