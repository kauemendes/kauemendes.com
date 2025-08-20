'use client'

import { motion } from 'framer-motion'

interface Section {
  id: string
  label: string
  icon: string
}

interface ResumeNavigationProps {
  sections: Section[]
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export function ResumeNavigation({ sections, activeSection, onSectionChange }: ResumeNavigationProps) {
  return (
    <nav className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
      <div className="space-y-2">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            onClick={() => onSectionChange(section.id)}
            className={`
              w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300
              ${activeSection === section.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }
            `}
          >
            <span className="text-xl">{section.icon}</span>
            <span className="font-medium">{section.label}</span>
            
            {activeSection === section.id && (
              <motion.div
                layoutId="activeIndicator"
                className="ml-auto w-2 h-2 bg-white rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Download Section */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-300 dark:border-slate-600"
          onClick={() => window.print()}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="font-medium">Download PDF</span>
        </motion.button>
      </div>
    </nav>
  )
}