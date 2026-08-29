'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { ResumeData } from '@/lib/types/resume'
import { ButtonExternal } from '@/components'
import { ResumeHeader } from './ResumeHeader'
import { ResumeNavigation } from './ResumeNavigation'
import { ExperienceSection } from './ExperienceSection'
import { SkillsSection } from './SkillsSection'
import { ProjectsSection } from './ProjectsSection'
import { EducationSection } from './EducationSection'
import { ContactSection } from './ContactSection'

interface ResumeLayoutProps {
  resumeData: ResumeData
}

export function ResumeLayout({ resumeData }: ResumeLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>('overview')
  const t = useTranslations('resume')
  const locale = useLocale()

  /*
   * Sections are numbered rather than iconified — the résumé reads in this
   * order, so the numbering carries meaning the six emoji did not.
   */
  const sections = [
    { id: 'overview', label: t('overview') },
    { id: 'experience', label: t('experience') },
    { id: 'skills', label: t('skills') },
    { id: 'projects', label: t('projects') },
    { id: 'education', label: t('education') },
    { id: 'contact', label: t('contact') },
  ]

  const renderSection = () => {
    switch (activeSection) {
      case 'experience':
        return <ExperienceSection experiences={resumeData.experience} />
      case 'skills':
        return <SkillsSection skillCategories={resumeData.skills} />
      case 'projects':
        return <ProjectsSection projects={resumeData.projects} />
      case 'education':
        return <EducationSection education={resumeData.education} certifications={resumeData.certifications} />
      case 'contact':
        return <ContactSection personal={resumeData.personal} social={resumeData.social} />
      case 'overview':
      default:
        return <ResumeHeader resumeData={resumeData} />
    }
  }

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto px-6">

      <header className="pt-14 pb-8 md:pt-20 md:pb-10">
        <h1 className="font-display text-[clamp(2.4rem,7vw,4rem)] leading-[0.98] tracking-[-0.02em] text-ink mb-4">
          {t('title')}
        </h1>
        <p className="font-text text-[16.5px] leading-[1.7] text-ink-soft max-w-[58ch]">
          {t('description')}
        </p>
      </header>

      <div className="rule-solid pt-6 pb-20 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">

        <div>
          <div className="lg:sticky lg:top-24">
            <ResumeNavigation
              sections={sections}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
            <div className="mt-6">
              <ButtonExternal href={`/${locale}/resume/print`} variant="solid">
                {t('downloadPdf')}
              </ButtonExternal>
            </div>
          </div>
        </div>

        <div key={activeSection} className="animate-fadeIn min-w-0">
          {renderSection()}
        </div>
      </div>
    </div>
  )
}
