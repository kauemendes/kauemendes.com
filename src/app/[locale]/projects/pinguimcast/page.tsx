import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { getProjects } from '@/content/data/projects';
import { Locale } from '@/i18n';
import { ProjectDetail } from '@/components';

const PROJECT_ID = 'pinguimcast';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const projects = await getProjects(locale as Locale);
  const project = projects.find(p => p.id === PROJECT_ID);

  return {
    title: project?.title ?? 'PinguimCast',
    description: project?.description ?? 'About PinguimCast.',
    keywords: ['Kaue Mendes', 'PinguimCast', 'Podcast', 'Technology', 'DevOps'],
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
  }
}

export default async function PinguimCastPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const projects = await getProjects(locale as Locale);
  const project = projects.find(p => p.id === PROJECT_ID);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} locale={locale} />;
}
