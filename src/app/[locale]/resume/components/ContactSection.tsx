'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { PersonalInfo, SocialProfile } from '@/lib/types/resume'
import { calculateTotalExperience } from '@/lib/utils/resume'

interface ContactSectionProps {
  personal: PersonalInfo
  social: SocialProfile[]
}

export function ContactSection({ personal, social }: ContactSectionProps) {
  const t = useTranslations('resume.contactSection')
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
        <h2 className="text-3xl font-bold font-poppins text-ink mb-2">
          {t('title')}
        </h2>
        <p className="text-ink-muted">
          {t('subtitle')}
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
          <div className="bg-surface-raised/80 backdrop-blur rounded-xl shadow-lg border border-edge p-6">
            <h3 className="text-xl font-bold font-poppins text-ink mb-6 flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <span>{t('contactInfo')}</span>
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmailClick}
                className="w-full flex items-center space-x-4 p-4 bg-accent/10 border border-accent/25 rounded-lg hover:bg-accent/20 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium text-ink">{t('email')}</div>
                  <div className="text-sm text-accent">{personal.email}</div>
                </div>
                <svg className="w-5 h-5 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.button>

              {/* Phone */}
              {personal.phone && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePhoneClick}
                  className="w-full flex items-center space-x-4 p-4 bg-accent/10 border border-accent/25 rounded-lg hover:bg-accent/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-ink">{t('phone')}</div>
                    <div className="text-sm text-accent">{personal.phone}</div>
                  </div>
                  <svg className="w-5 h-5 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.button>
              )}

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 bg-accent-cyan/10 border border-accent-cyan/25 rounded-lg">
                <div className="w-10 h-10 bg-accent-cyan/15 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-ink">{t('location')}</div>
                  <div className="text-sm text-accent-cyan">{personal.location}</div>
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
                  className="w-full flex items-center space-x-4 p-4 bg-accent-cyan/10 border border-accent-cyan/25 rounded-lg hover:bg-accent-cyan/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-accent-cyan/15 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c5-5 9-9 9-9m-9 9c-5-5-9-9-9-9" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-ink">{t('website')}</div>
                    <div className="text-sm text-accent-cyan">{personal.website}</div>
                  </div>
                  <svg className="w-5 h-5 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Social Profiles */}
        <motion.div variants={itemVariants}>
          <div className="bg-surface-raised/80 backdrop-blur rounded-xl shadow-lg border border-edge p-6">
            <h3 className="text-xl font-bold font-poppins text-ink mb-6 flex items-center space-x-3">
              <span className="text-2xl">🌐</span>
              <span>{t('socialProfiles')}</span>
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
                  className="flex items-center space-x-4 p-4 bg-surface/60 border border-edge rounded-lg hover:shadow-md hover:border-accent/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-accent">
                      {profile.platform.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-ink">
                      {profile.platform}
                    </div>
                    <div className="text-sm text-ink-muted">
                      @{profile.username}
                    </div>
                  </div>
                  {profile.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/15 text-accent">
                      {t('featured')}
                    </span>
                  )}
                  <svg className="w-5 h-5 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-accent rounded-xl text-brand-primary"
            >
              <h4 className="text-lg font-bold font-poppins mb-2">{t('readyToCollaborate')}</h4>
              <p className="text-brand-primary/80 mb-4 text-sm">
                {t('openToDiscuss')}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmailClick}
                className="w-full bg-brand-primary text-brand-accent2 font-semibold py-3 px-6 rounded-lg hover:bg-brand-secondary transition-colors duration-300"
              >
                {t('sendEmail')}
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
        <div className="text-center p-4 bg-surface-raised/80 backdrop-blur rounded-xl shadow-md border border-edge">
          <div className="text-2xl font-bold text-accent">24h</div>
          <div className="text-xs text-ink-muted">{t('responseTime')}</div>
        </div>

        <div className="text-center p-4 bg-surface-raised/80 backdrop-blur rounded-xl shadow-md border border-edge">
          <div className="text-2xl font-bold text-accent">{t('remote')}</div>
          <div className="text-xs text-ink-muted">{t('workAvailable')}</div>
        </div>

        <div className="text-center p-4 bg-surface-raised/80 backdrop-blur rounded-xl shadow-md border border-edge">
          <div className="text-2xl font-bold text-accent-cyan">GMT+1</div>
          <div className="text-xs text-ink-muted">{t('timezone')}</div>
        </div>

        <div className="text-center p-4 bg-surface-raised/80 backdrop-blur rounded-xl shadow-md border border-edge">
          <div className="text-2xl font-bold">🇵🇹</div>
          <div className="text-xs text-ink-muted">{t('basedIn')}</div>
        </div>
      </motion.div>
    </div>
  )
}