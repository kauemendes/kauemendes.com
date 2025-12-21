import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { getResumeData } from '@/content/data/resume'
import { ResumeLayout } from './components/ResumeLayout'
import { Locale } from '@/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const isPortuguese = locale === 'pt'

  return {
    title: isPortuguese
      ? 'Currículo - Kaue Mendes | Engenheiro DevOps & Desenvolvedor de Software'
      : 'Resume - Kaue Mendes | DevOps Engineer & Software Developer',
    description: isPortuguese
      ? 'Currículo interativo mostrando minha experiência em DevOps, desenvolvimento de software e automação de infraestrutura.'
      : 'Interactive resume showcasing my experience in DevOps, software development, and infrastructure automation.',
    keywords: ['DevOps', 'Software Engineer', 'Resume', 'CV', 'Azure', 'Kubernetes', 'Python', 'TypeScript'],
    openGraph: {
      title: isPortuguese ? 'Kaue Mendes - Currículo Interativo' : 'Kaue Mendes - Interactive Resume',
      description: isPortuguese
        ? 'Engenheiro DevOps com mais de 15 anos de experiência em desenvolvimento de software e automação de infraestrutura'
        : 'DevOps Engineer with 15+ years of experience in software development and infrastructure automation',
      type: 'profile',
      url: `https://kauemendes.com/${locale}/resume`,
    },
    twitter: {
      card: 'summary_large_image',
      title: isPortuguese ? 'Kaue Mendes - Currículo Interativo' : 'Kaue Mendes - Interactive Resume',
      description: isPortuguese
        ? 'Engenheiro DevOps com mais de 10 anos de experiência em desenvolvimento de software e automação de infraestrutura'
        : 'DevOps Engineer with 10+ years of experience in software development and infrastructure automation',
    }
  }
}

export default async function ResumePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const resumeData = await getResumeData(locale as Locale)

  return <ResumeLayout resumeData={resumeData} />
}
