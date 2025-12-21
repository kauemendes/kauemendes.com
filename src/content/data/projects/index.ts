import { Locale } from '@/i18n';

export interface Project {
  title: string;
  description: string;
  image_banner: string;
  id: string;
  category: string;
  technologies: string[];
  features: string[];
  status: string;
  github?: string;
  marketplace?: string;
  demo?: string;
  year: string;
  impact?: string;
}

export async function getProjects(locale: Locale): Promise<Project[]> {
  if (locale === 'pt') {
    const { projects } = await import('./pt');
    return projects;
  }
  const { projects } = await import('./en');
  return projects;
}

// Re-export for backwards compatibility
export { projects } from './en';
