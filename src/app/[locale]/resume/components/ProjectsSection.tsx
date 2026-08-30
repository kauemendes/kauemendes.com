'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Project } from '@/lib/types/resume'
import { formatDateRange } from '@/lib/utils/resume'

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const t = useTranslations('resume.projectsSection')
  const [filter, setFilter] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).slice(0, 8)

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project =>
        project.technologies.some(tech =>
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      )

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  return (
    <div className="p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-display text-ink mb-2">
          {t('title')}
        </h2>
        <p className="text-ink-muted">
          {t('subtitle')}
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${ filter === 'all' ? 'bg-accent text-paper shadow-hard-sm' : 'bg-paper-2 border-2 border-ink text-ink-muted hover:text-ink hover:border-accent/40' }`}
          >
            {t('allProjects')}
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${ filter === tech ? 'bg-accent text-paper shadow-hard-sm' : 'bg-paper-2 border-2 border-ink text-ink-muted hover:text-ink hover:border-accent/40' }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover={{ y: -5 }}
              className="bg-paper-2 shadow-hard-sm border-2 border-ink overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              {project.images && project.images[0] && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="object-cover transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium ${ project.status === 'completed' ? 'bg-paper text-accent' : project.status === 'in-progress' ? 'bg-paper text-accent' : 'bg-paper text-ink' }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-display text-ink mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm text-accent mb-2">
                      {project.role}
                    </p>
                  </div>

                  {project.featured && (
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-accent text-accent">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                <p className="text-ink-muted text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Date Range */}
                <div className="flex items-center space-x-2 mb-4 text-xs text-ink-muted">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{formatDateRange(project.startDate, project.endDate)}</span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2 py-1 text-xs font-medium bg-paper border-2 border-ink text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-paper border-2 border-ink text-ink-muted">
                      +{project.technologies.length - 4} {t('more')}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center space-x-1 text-accent hover:text-accent text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>{t('viewProject')}</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center space-x-1 text-ink-muted hover:text-ink text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>{t('code')}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            t={t}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
  t: (key: string) => string
}

function ProjectModal({ project, onClose, t }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-paper-2 border-2 border-ink shadow-hard-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-display text-ink mb-2">
                {project.name}
              </h3>
              <p className="text-accent font-medium">
                {project.role}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-ink-muted hover:text-ink"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-ink-muted leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="font-semibold text-ink mb-3">{t('keyHighlights')}</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-ink-muted">
                      <span className="text-accent font-mono text-[11px] mt-1" aria-hidden="true">&rarr;</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Impact Metrics */}
            {project.impact && project.impact.length > 0 && (
              <div>
                <h4 className="font-semibold text-ink mb-3">{t('impactResults')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.impact.map((metric, idx) => (
                    <div key={idx} className="bg-paper border-2 border-ink p-4">
                      <div className="text-2xl font-bold text-accent">
                        {metric.value}
                      </div>
                      <div className="text-sm font-medium text-ink">
                        {metric.metric}
                      </div>
                      {metric.description && (
                        <div className="text-xs text-ink-muted mt-1">
                          {metric.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-ink mb-3">{t('technologiesUsed')}</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 text-sm font-medium bg-paper border-2 border-ink text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}