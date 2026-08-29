'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { WorkExperience } from '@/lib/types/resume'
import { formatDateRange, formatDuration } from '@/lib/utils/resume'

interface ExperienceSectionProps {
  experiences: WorkExperience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const t = useTranslations('resume.experienceSection')
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
        <h2 className="text-3xl font-display text-ink mb-2 flex items-center">
          <span className="w-8 h-8 bg-accent flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-paper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
            </svg>
          </span>
          {t('title')}
        </h2>
        <p className="text-ink-muted pl-11">
          {t('subtitle')}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative"
      >
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent"></div>

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={itemVariants}
            className="relative mb-12 last:mb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-accent border-4 border-paper shadow-hard-sm z-10"></div>

            {/* Experience Card */}
            <div className="ml-20">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-paper-2 shadow-hard-sm border-2 border-ink p-6 hover:border-accent/40 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      {experience.companyLogo && (
                        <div className="w-12 h-12 overflow-hidden bg-white">
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
                        <h3 className="text-xl font-display text-ink">
                          {experience.position}
                        </h3>
                        <p className="text-accent font-medium">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-ink-muted">
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
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-accent/15 text-accent">
                      {t('current')}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-ink-muted mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                {experience.responsibilities && experience.responsibilities.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-ink mb-2">{t('keyResponsibilities')}</h4>
                    <ul className="space-y-1">
                      {experience.responsibilities.slice(0, 4).map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-ink-muted">
                          <span className="text-accent mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-ink mb-2">{t('keyAchievements')}</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-ink-muted">
                          <span className="text-accent font-mono text-[11px] mt-1" aria-hidden="true">&rarr;</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-ink mb-3">{t('technologiesTools')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors duration-200"
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