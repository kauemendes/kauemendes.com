'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ResumeData } from '@/lib/types/resume'
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

  const sections = [
    { id: 'overview', label: t('overview'), icon: '👤' },
    { id: 'experience', label: t('experience'), icon: '💼' },
    { id: 'skills', label: t('skills'), icon: '🚀' },
    { id: 'projects', label: t('projects'), icon: '⚡' },
    { id: 'education', label: t('education'), icon: '🎓' },
    { id: 'contact', label: t('contact'), icon: '📧' }
  ]

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <ResumeHeader resumeData={resumeData} />
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
      default:
        return <ResumeHeader resumeData={resumeData} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-brand">
      <div className="container mx-auto px-4 py-8 max-w-7xl pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="bg-brand-accent2/10 text-brand-accent2 text-sm font-medium px-4 py-2 rounded-full border border-brand-accent2/20">
              {t('title')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-brand-neutral-light mb-6">
            {t('subtitle').split(' ')[0]} <span className="bg-gradient-accent bg-clip-text text-transparent">{t('subtitle').split(' ')[1] || t('experience')}</span>
          </h1>

          <p className="text-brand-neutral-light/80 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ResumeNavigation
                sections={sections}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeSection}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="bg-brand-secondary/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-brand-secondary overflow-hidden"
            >
              {renderSection()}
            </motion.div>
          </div>
        </div>

        {/* Print Button - Fixed Position */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          className="fixed bottom-8 right-8 bg-brand-accent1 hover:bg-brand-accent2 text-brand-primary p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          onClick={() => window.print()}
          aria-label={t('printResume')}
        >
          <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
        </motion.button>
      </div>
    </div>
  )
}
