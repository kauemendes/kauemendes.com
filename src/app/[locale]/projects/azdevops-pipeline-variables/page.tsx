import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { getProjects } from '@/content/data/projects';
import { Locale } from '@/i18n';
import { ProjectDetail } from '@/components';

const PROJECT_ID = 'azdevops-pipeline-variables';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const projects = await getProjects(locale as Locale);
  const project = projects.find(p => p.id === PROJECT_ID);

  return {
    title: project?.title ?? 'Azure DevOps - Pipeline Variables',
    description: project?.description ?? 'About Azure DevOps - Pipeline Variables.',
    keywords: ['Kaue Mendes', 'Azure DevOps Extension', 'AzDO', 'Pipeline Variables', 'DevOps'],
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
  }
}

export default async function PipelineVariablesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const projects = await getProjects(locale as Locale);
  const project = projects.find(p => p.id === PROJECT_ID);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} locale={locale} />;
}
