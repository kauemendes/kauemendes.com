import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

import { getProjects, Project } from '@/content/data/projects';
import { Locale } from '@/i18n';
import { Frame, Tag } from '@/components';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });

  return {
    title: t('title'),
    description: t('indexSubtitle'),
    alternates: {
      canonical: `/${locale}/projects`,
      languages: { 'pt-BR': '/pt/projects', en: '/en/projects' },
    },
  };
}

/** Statuses that read as currently-live get the accent; everything else is ink. */
const LIVE_STATUSES = ['active', 'ativo', 'published', 'publicado'];

function ProjectCard({ project, locale, viewLabel }: { project: Project; locale: string; viewLabel: string }) {
  const isLive = LIVE_STATUSES.includes(project.status.toLowerCase());

  return (
    <Frame as="article" shadow="sm" press className="flex flex-col">
      <Link href={`/${locale}/projects/${project.id}`} className="flex flex-col flex-1 no-underline">
        <div className="flex justify-between gap-3 px-4 pt-3 font-mono text-[9.5px] tracking-[0.12em] uppercase text-ink-muted">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <div className="px-4 pt-2.5 pb-4 flex flex-col flex-1">
          <h2 className="font-display text-[1.5rem] leading-[1.05] text-ink mb-2">
            {project.title}
          </h2>
          <p className="font-text text-[13.5px] leading-[1.6] text-ink-soft mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.technologies.slice(0, 3).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-ink bg-paper-2 px-4 py-2 flex justify-between gap-3 font-mono text-[10px] tracking-[0.1em] uppercase">
          <span className={isLive ? 'text-accent font-bold' : 'text-ink-muted'}>
            {isLive && <span aria-hidden="true">&#9679; </span>}
            {project.status}
          </span>
          <span className="text-ink-muted">{viewLabel} &rarr;</span>
        </div>
      </Link>
    </Frame>
  );
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'projects' });
  const projects = await getProjects(locale as Locale);

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
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-6">
          <h2 className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink font-bold">
            {t('index')}
          </h2>
          <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink-muted">
            {t('count', { count: projects.length })}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              viewLabel={t('viewDetails')}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
