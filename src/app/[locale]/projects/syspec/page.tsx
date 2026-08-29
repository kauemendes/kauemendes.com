import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { getProjects } from '@/content/data/projects';
import { Locale } from '@/i18n';
import { ProjectDetail } from '@/components';

const PROJECT_ID = 'syspec';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const projects = await getProjects(locale as Locale);
  const project = projects.find(p => p.id === PROJECT_ID);

  return {
    title: project?.title ?? 'Syspec',
    description: project?.description ?? 'About Syspec.',
    keywords: ['Kaue Mendes', 'Syspec', 'System Architecture', 'System Design', 'DevOps', 'Simulation'],
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
  }
}

export default async function SyspecPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const projects = await getProjects(locale as Locale);
  const project = projects.find(p => p.id === PROJECT_ID);

  if (!project) {
    notFound();
  }

  const isPt = locale === 'pt';
  const demoLabel = isPt ? 'Acessar o Syspec' : 'Open Syspec';

  return <ProjectDetail project={project} locale={locale} demoLabel={demoLabel} />;
}
