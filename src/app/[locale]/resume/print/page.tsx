import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { getResumeData } from '@/content/data/resume'
import { Locale } from '@/i18n'
import { PrintResume } from './PrintResume'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const isPortuguese = locale === 'pt'
  return {
    title: isPortuguese ? 'Kaue Mendes — Currículo' : 'Kaue Mendes — CV',
    description: isPortuguese
      ? 'Versão imprimível do currículo de Kaue Mendes.'
      : 'Printable version of Kaue Mendes resume.',
    robots: { index: false, follow: false },
  }
}

export default async function ResumePrintPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const resumeData = await getResumeData(locale as Locale)

  return <PrintResume data={resumeData} locale={locale} />
}
