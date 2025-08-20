'use client'

import { motion } from 'framer-motion'
import { PersonalInfo, SocialProfile } from '@/lib/types/resume'
import { calculateTotalExperience } from '@/lib/utils/resume'

interface ContactSectionProps {
  personal: PersonalInfo
  social: SocialProfile[]
}

export function ContactSection({ personal, social }: ContactSectionProps) {
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
    animate: { opacity: 1, y: 0 }
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${personal.email}`
  }

  const handlePhoneClick = () => {
    if (personal.phone) {
      window.location.href = `tel:${personal.phone}`
    }
  }

  return (
    <div className="p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Let's connect and discuss opportunities
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Contact Information */}
        <motion.div variants={itemVariants}>
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <span>Contact Information</span>
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmailClick}
                className="w-full flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium text-slate-900 dark:text-white">Email</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">{personal.email}</div>
                </div>
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.button>

              {/* Phone */}
              {personal.phone && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePhoneClick}
                  className="w-full flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-slate-900 dark:text-white">Phone</div>
                    <div className="text-sm text-green-600 dark:text-green-400">{personal.phone}</div>
                  </div>
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.button>
              )}

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900 dark:text-white">Location</div>
                  <div className="text-sm text-purple-600 dark:text-purple-400">{personal.location}</div>
                </div>
              </div>

              {/* Website */}
              {personal.website && (
                <motion.a
                  href={personal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center space-x-4 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c5-5 9-9 9-9m-9 9c-5-5-9-9-9-9" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-slate-900 dark:text-white">Website</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">{personal.website}</div>
                  </div>
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Social Profiles */}
        <motion.div variants={itemVariants}>
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center space-x-3">
              <span className="text-2xl">🌐</span>
              <span>Social Profiles</span>
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {social.map((profile, index) => (
                <motion.a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                      {profile.platform.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900 dark:text-white">
                      {profile.platform}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      @{profile.username}
                    </div>
                  </div>
                  {profile.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Featured
                    </span>
                  )}
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white"
            >
              <h4 className="text-lg font-bold mb-2">Ready to collaborate?</h4>
              <p className="text-blue-100 mb-4 text-sm">
                I'm always open to discussing new opportunities, interesting projects, or just having a great conversation about technology.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmailClick}
                className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Send me an email
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        variants={itemVariants}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24h</div>
          <div className="text-xs text-slate-600 dark:text-slate-400">Response Time</div>
        </div>
        
        <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">Remote</div>
          <div className="text-xs text-slate-600 dark:text-slate-400">Work Available</div>
        </div>
        
        <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">GMT+1</div>
          <div className="text-xs text-slate-600 dark:text-slate-400">Timezone</div>
        </div>
        
        <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">🇵🇹</div>
          <div className="text-xs text-slate-600 dark:text-slate-400">Based in Portugal</div>
        </div>
      </motion.div>
    </div>
  )
}