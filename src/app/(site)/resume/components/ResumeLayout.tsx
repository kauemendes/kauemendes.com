'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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

  const sections = [
    { id: 'overview', label: 'Overview', icon: '👤' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '🚀' },
    { id: 'projects', label: 'Projects', icon: '⚡' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '📧' }
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
    <div className="m-auto mt-16 p-10 min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
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
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
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
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          onClick={() => window.print()}
          aria-label="Print Resume"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
        </motion.button>
      </div>
    </div>
  )
}