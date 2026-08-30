import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { Project } from '@/content/data/projects';
import { Frame, Tag, ButtonLink, ButtonExternal, Meta } from '@/components/ui';

const LIVE_STATUSES = ['active', 'ativo', 'published', 'publicado'];

interface ProjectDetailProps {
  project: Project;
  locale: string;
  /** Overrides the default "Open project" label on the primary action. */
  demoLabel?: string;
}

/**
 * Shared detail view for every project page. Previously each of the four pages
 * carried its own near-identical 200-line copy of this markup.
 */
export async function ProjectDetail({ project, locale, demoLabel }: ProjectDetailProps) {
  const t = await getTranslations({ locale, namespace: 'projects' });
  const isLive = LIVE_STATUSES.includes(project.status.toLowerCase());

  return (
    <div className="max-w-4xl mx-auto px-6">

      <div className="pt-8 pb-10">
        <Link
          href={`/${locale}/projects`}
          className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-muted hover:text-accent transition-colors duration-150"
        >
          &larr; {t('backToProjects')}
        </Link>
      </div>

      <header>
        <Meta
          items={[
            project.category,
            project.year,
            <span key="s" className={isLive ? 'text-accent font-bold' : undefined}>
              {project.status}
            </span>,
          ]}
          className="mb-4"
        />
        <h1 className="font-display text-[clamp(2.1rem,6vw,3.4rem)] leading-[1.02] tracking-[-0.015em] text-ink mb-5">
          {project.title}
        </h1>
        <p className="font-text text-[17px] leading-[1.65] text-ink-soft max-w-[58ch] mb-8">
          {project.description}
        </p>
      </header>

      <hr className="rule-solid mb-10" />

      <figure className="mb-10">
        <div className="relative w-full aspect-[2/1] border-2 border-ink overflow-hidden bg-paper-2">
          <Image
            src={project.image_banner}
            alt={project.title}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>
      </figure>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Frame shadow="sm" className="p-5">
          <h2 className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-muted pb-3 mb-4 border-b border-dashed border-rule">
            {t('technologies')}
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </Frame>

        <Frame shadow="sm" className="p-5">
          <h2 className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-muted pb-3 mb-4 border-b border-dashed border-rule">
            {t('information')}
          </h2>
          <dl className="font-mono text-[12px]">
            <div className="flex justify-between py-1.5 border-b border-dashed border-rule">
              <dt className="text-ink-muted">{t('year')}</dt>
              <dd className="text-ink">{project.year}</dd>
            </div>
            <div className="flex justify-between py-1.5">
              <dt className="text-ink-muted">{t('statusLabel')}</dt>
              <dd className={isLive ? 'text-accent font-bold' : 'text-ink'}>{project.status}</dd>
            </div>
          </dl>
        </Frame>
      </div>

      <section className="mb-10">
        <h2 className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-muted pb-3 mb-1 border-b-2 border-ink">
          {t('keyFeatures')}
        </h2>
        <ul>
          {project.features.map((feature) => (
            <li
              key={feature}
              className="rule-dash py-3 font-text text-[15.5px] leading-[1.65] text-ink-soft flex gap-3"
            >
              <span className="text-accent font-mono text-[12px] pt-1" aria-hidden="true">&rarr;</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {project.impact && (
        <Frame raised shadow="sm" className="p-5 mb-10 border-l-8 border-l-accent">
          <h2 className="font-mono text-[10px] tracking-[0.16em] uppercase text-accent font-bold mb-2">
            {t('impact')}
          </h2>
          <p className="font-text text-[15.5px] leading-[1.65] text-ink">{project.impact}</p>
        </Frame>
      )}

      <div className="rule-solid pt-6 pb-20 flex flex-wrap gap-3">
        {project.demo && (
          <ButtonExternal href={project.demo} variant="accent">
            {demoLabel ?? t('openProject')}
          </ButtonExternal>
        )}
        {project.marketplace && (
          <ButtonExternal href={project.marketplace} variant="solid">
            {t('marketplace')}
          </ButtonExternal>
        )}
        {project.github && (
          <ButtonExternal href={project.github}>{t('sourceCode')}</ButtonExternal>
        )}
        <ButtonLink href={`/${locale}/projects`}>{t('viewAll')}</ButtonLink>
      </div>
    </div>
  );
}
