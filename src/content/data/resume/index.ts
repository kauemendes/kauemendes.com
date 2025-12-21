import { ResumeData } from '@/lib/types/resume';
import { Locale } from '@/i18n';

export async function getResumeData(locale: Locale): Promise<ResumeData> {
  if (locale === 'pt') {
    const { resumeData } = await import('./pt');
    return resumeData;
  }
  const { resumeData } = await import('./en');
  return resumeData;
}

// Re-export for backwards compatibility
export { resumeData } from './en';
