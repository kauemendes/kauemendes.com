'use client'

import { motion } from 'framer-motion'
import { Education, Certification } from '@/lib/types/resume'
import { formatDateRange } from '@/lib/utils/resume'

interface EducationSectionProps {
  education: Education[]
  certifications: Certification[]
}

export function EducationSection({ education, certifications }: EducationSectionProps) {
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
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }

  return (
    <div className="p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Education & Certifications
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Academic background and professional certifications
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="space-y-8"
      >
        {/* Education Section */}
        {education.length > 0 && (
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center space-x-3">
              <span className="text-2xl">🎓</span>
              <span>Education</span>
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {edu.field}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 mb-2">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{formatDateRange(edu.startDate, edu.endDate)}</span>
                        </span>
                        
                        <span className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span>{edu.location}</span>
                        </span>

                        {edu.gpa && (
                          <span className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <span>GPA: {edu.gpa}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Achievements:</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Certifications Section */}
        {certifications.length > 0 && (
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center space-x-3">
              <span className="text-2xl">🏆</span>
              <span>Certifications</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {cert.issuer}
                      </p>
                    </div>
                    
                    {!cert.expiryDate || new Date(cert.expiryDate) > new Date() ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        ✓ Valid
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        Expired
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Issued: {new Date(cert.issueDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}</span>
                    </div>
                    
                    {cert.expiryDate && (
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Expires: {new Date(cert.expiryDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long' 
                        })}</span>
                      </div>
                    )}

                    {cert.credentialId && (
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <span className="font-mono text-xs">ID: {cert.credentialId}</span>
                      </div>
                    )}
                  </div>

                  {cert.description && (
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>View Credential</span>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {education.length === 0 && certifications.length === 0 && (
          <motion.div
            variants={itemVariants}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🎓</div>
            <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">
              No Education or Certifications Listed
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Education and certification information will be displayed here when available.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}