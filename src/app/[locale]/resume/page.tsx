import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { getResumeData } from '@/content/data/resume'
import { ResumeLayout } from './components/ResumeLayout'
import { Locale } from '@/i18n'
import { buildAlternates, absoluteUrl } from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const isPortuguese = locale === 'pt'

  return {
    title: isPortuguese
      ? 'Currículo · Kaue Mendes | Consultor de IA Empresarial, Cloud & DevOps'
      : 'Resume · Kaue Mendes | Enterprise AI, Cloud & DevOps Consultant',
    description: isPortuguese
      ? 'Currículo interativo de Kaue Mendes — IA empresarial (IAOps, MCPs, multi-agente, AWS Bedrock, LLM em Kubernetes), Cloud, DevOps, automação e desenvolvimento de software.'
      : 'Interactive resume of Kaue Mendes — Enterprise AI (IAOps, MCPs, multi-agent, AWS Bedrock, LLMs on Kubernetes), Cloud, DevOps, automation and software development.',
    keywords: [
      'Enterprise AI',
      'IAOps',
      'AIOps',
      'MCP',
      'Multi-Agent',
      'Vibe Coding',
      'AWS Bedrock',
      'Anthropic',
      'Codex',
      'OpenWebUI',
      'LLM Kubernetes',
      'DevOps',
      'Software Engineer',
      'Resume',
      'CV',
      'Azure',
      'Kubernetes',
      'Python',
      'TypeScript',
    ],
    alternates: buildAlternates(locale, '/resume'),
    openGraph: {
      title: isPortuguese ? 'Kaue Mendes · Currículo Interativo' : 'Kaue Mendes · Interactive Resume',
      description: isPortuguese
        ? 'Consultor em IA Empresarial, Cloud e DevOps com mais de 15 anos de experiência em desenvolvimento de software, automação e infraestrutura.'
        : 'Enterprise AI, Cloud and DevOps consultant with 15+ years of experience in software development, automation and infrastructure.',
      type: 'profile',
      locale: isPortuguese ? 'pt_BR' : 'en_US',
      url: absoluteUrl(locale, '/resume'),
      siteName: 'Kaue Mendes',
    },
    twitter: {
      card: 'summary_large_image',
      title: isPortuguese ? 'Kaue Mendes · Currículo Interativo' : 'Kaue Mendes · Interactive Resume',
      description: isPortuguese
        ? 'Consultor em IA Empresarial, Cloud e DevOps com mais de 15 anos de experiência.'
        : 'Enterprise AI, Cloud and DevOps consultant with 15+ years of experience.',
    },
  }
}

export default async function ResumePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const resumeData = await getResumeData(locale as Locale)

  return <ResumeLayout resumeData={resumeData} />
}
