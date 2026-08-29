import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { getProjects } from '@/content/data/projects';
import { Locale } from '@/i18n';
import { ProjectDetail } from '@/components';

const PROJECT_ID = 'azdevops-json-to-variable';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const projects = await getProjects(locale as Locale);
  const project = projects.find(p => p.id === PROJECT_ID);

  return {
    title: project?.title ?? 'Azure DevOps - Convert JSON to Variables',
    description: project?.description ?? 'About Azure DevOps - Convert JSON to Variables.',
    keywords: ['Kaue Mendes', 'Azure DevOps Extension', 'AzDO', 'JSON to Variable', 'DevOps'],
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
  }
}

export default async function JsonToVariablePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const projects = await getProjects(locale as Locale);
  const project = projects.find(p => p.id === PROJECT_ID);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} locale={locale} />;
}
