import { Metadata } from 'next'
import { resumeData } from '@/content/data/resume'
import { ResumeLayout } from './components/ResumeLayout'

export const metadata: Metadata = {
  title: 'Resume - Kaue Mendes | DevOps Engineer & Software Developer',
  description: 'Interactive resume showcasing my experience in DevOps, software development, and infrastructure automation.',
  keywords: ['DevOps', 'Software Engineer', 'Resume', 'CV', 'Azure', 'Kubernetes', 'Python', 'TypeScript'],
  openGraph: {
    title: 'Kaue Mendes - Interactive Resume',
    description: 'DevOps Engineer with 10+ years of experience in software development and infrastructure automation',
    type: 'profile',
    url: 'https://kauemendes.com/resume',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaue Mendes - Interactive Resume',
    description: 'DevOps Engineer with 10+ years of experience in software development and infrastructure automation',
  }
}

export default function ResumePage() {
  return <ResumeLayout resumeData={resumeData} />
}