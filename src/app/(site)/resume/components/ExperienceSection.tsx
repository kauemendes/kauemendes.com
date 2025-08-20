'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { WorkExperience } from '@/lib/types/resume'
import { formatDateRange, formatDuration } from '@/lib/utils/resume'

interface ExperienceSectionProps {
  experiences: WorkExperience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }

  return (
    <div className="p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Professional Experience
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          My journey through various roles and companies
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative"
      >
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400"></div>

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={itemVariants}
            className="relative mb-12 last:mb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-blue-600 border-4 border-white dark:border-slate-800 rounded-full shadow-lg z-10"></div>

            {/* Experience Card */}
            <div className="ml-20">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      {experience.companyLogo && (
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md">
                          <Image
                            src={experience.companyLogo}
                            alt={`${experience.company} logo`}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {experience.position}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{formatDateRange(experience.startDate, experience.endDate)}</span>
                      </span>
                      
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{formatDuration(experience.startDate, experience.endDate)}</span>
                      </span>
                      
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{experience.location}</span>
                      </span>
                    </div>
                  </div>

                  {!experience.endDate && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Current
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                {experience.responsibilities && experience.responsibilities.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {experience.responsibilities.slice(0, 4).map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Technologies & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}