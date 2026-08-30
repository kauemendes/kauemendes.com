import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { getProjects } from '@/content/data/projects';
import { Locale } from '@/i18n';
import { ProjectDetail } from '@/components';
import { buildAlternates, absoluteUrl, ogLocale, alternateOgLocales, SITE_NAME } from '@/lib/seo';

const FALLBACK_TITLE = 'Azure DevOps - Convert JSON to Variables';
const KEYWORDS = ['Kaue Mendes', 'Azure DevOps Extension', 'AzDO', 'JSON to Variable', 'DevOps'];

const PROJECT_ID = 'azdevops-json-to-variable';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const projects = await getProjects(locale as Locale);
  const project = projects.find(p => p.id === PROJECT_ID);

  const title = project?.title ?? FALLBACK_TITLE;
  const description = project?.description ?? `About ${FALLBACK_TITLE}.`;
  const path = `/projects/${PROJECT_ID}`;

  return {
    title,
    description,
    keywords: KEYWORDS,
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
    // Without this the locale layout's canonical is inherited and the page
    // tells crawlers the real page is the home page.
    alternates: buildAlternates(locale, path),
    openGraph: {
      type: 'website',
      title,
      description,
      url: absoluteUrl(locale, path),
      siteName: SITE_NAME,
      locale: ogLocale(locale),
      alternateLocale: alternateOgLocales(locale),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
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
