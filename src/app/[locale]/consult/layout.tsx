import type { Metadata } from 'next'
import { buildAlternates, absoluteUrl } from '@/lib/seo';

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params
  const isPt = locale === 'pt'

  const title = isPt
    ? 'Consultoria de IA Empresarial, Cloud & DevOps · Kaue Mendes'
    : 'Enterprise AI, Cloud & DevOps Consulting · Kaue Mendes'

  const description = isPt
    ? 'Consultoria exclusiva em IA empresarial: arquitetura, MCPs, sistemas multi-agente, IAOps, AWS Bedrock, modelos LLM em Kubernetes com GPU, Spec-Driven Development e Vibe Coding. Também Cloud (Azure/AWS), DevOps e CI/CD.'
    : 'Exclusive enterprise AI consulting: architecture, MCPs, multi-agent systems, IAOps, AWS Bedrock, LLM models on Kubernetes with GPU, Spec-Driven Development and Vibe Coding. Also Cloud (Azure/AWS), DevOps and CI/CD.'

  const keywords = [
    'Enterprise AI Consulting',
    'AI Consultancy',
    'IAOps',
    'AIOps',
    'MCP',
    'Model Context Protocol',
    'Multi-Agent Systems',
    'Vibe Coding',
    'Spec-Driven Development',
    'AWS Bedrock',
    'OpenAI',
    'Anthropic',
    'Claude',
    'OpenWebUI',
    'Codex',
    'LLM on Kubernetes',
    'GPU Kubernetes',
    'AI Architecture',
    'AI Governance',
    'RAG',
    'Cloud Consulting',
    'DevOps Consulting',
    'Azure',
    'AWS',
    'Kubernetes',
    'Terraform',
    'Kaue Mendes',
    isPt ? 'Consultoria de IA' : 'AI Consulting',
    isPt ? 'IA Empresarial' : 'Enterprise AI',
    isPt ? 'Consultoria DevOps' : 'DevOps Consulting',
    isPt ? 'Arquitetura de IA' : 'AI Architecture',
  ]

  return {
    title,
    description,
    keywords,
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
    alternates: buildAlternates(locale, '/consult'),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isPt ? 'pt_BR' : 'en_US',
      url: absoluteUrl(locale, '/consult'),
      siteName: 'Kaue Mendes',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default function ConsultLayout({ children }: LayoutProps) {
  return children
}
