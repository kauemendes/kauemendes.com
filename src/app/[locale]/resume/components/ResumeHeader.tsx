'use client'

import { motion } from 'framer-motion'
import { ButtonLink } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { ResumeData } from '@/lib/types/resume'
import { calculateTotalExperience } from '@/lib/utils/resume'

interface ResumeHeaderProps {
  resumeData: ResumeData
}

export function ResumeHeader({ resumeData }: ResumeHeaderProps) {
  const { personal, social, experience } = resumeData
  const totalExperience = calculateTotalExperience(experience)
  const locale = useLocale()
  const t = useTranslations('resume')

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
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="p-8 md:p-12"
    >
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 mb-12">
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden ring-4 ring-accent/30 shadow-hard-sm">
            <Image
              src={personal.avatar || '/images/avatars/avatar.png'}
              alt={personal.name}
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Status Indicator */}
          <div className="absolute -bottom-2 -right-2 bg-accent w-6 h-6 border-4 border-paper flex items-center justify-center">
            <div className="w-2 h-2 bg-paper-2"></div>
          </div>
        </motion.div>

        {/* Basic Info */}
        <div className="flex-1">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display text-ink mb-2"
          >
            {personal.name}
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-accent font-medium mb-4"
          >
            {personal.title}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 text-ink-muted"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{personal.location}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{totalExperience}+ years experience</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Summary */}
      <motion.div
        variants={itemVariants}
        className="mb-12"
      >
        <h2 className="text-2xl font-display text-ink mb-4 flex items-center">
          <span className="w-8 h-8 bg-accent flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-paper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
          About Me
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed pl-11">
          {personal.summary}
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
      >
        <div className="text-center p-6 bg-linear-to-br from-accent/15 to-accent/5 border border-accent/20">
          <div className="text-3xl font-display text-accent">{totalExperience}+</div>
          <div className="text-sm text-ink-muted mt-1">Years Experience</div>
        </div>
        
        <div className="text-center p-6 bg-linear-to-br from-accent/15 to-accent/5 border border-accent/20">
          <div className="text-3xl font-display text-accent">{experience.length}</div>
          <div className="text-sm text-ink-muted mt-1">Companies</div>
        </div>
        
        <div className="text-center p-6 bg-linear-to-br from-accent/15 to-accent/5 border border-accent/20">
          <div className="text-3xl font-display text-accent">{resumeData.projects.length}</div>
          <div className="text-sm text-ink-muted mt-1">Projects</div>
        </div>
        
        <div className="text-center p-6 bg-linear-to-br from-accent/15 to-accent/5 border border-accent/20">
          <div className="text-3xl font-display text-accent">
            {resumeData.skills.reduce((total, category) => total + category.skills.length, 0)}
          </div>
          <div className="text-sm text-ink-muted mt-1">Skills</div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={itemVariants}
        className="mb-8"
      >
        <h3 className="text-lg font-display text-ink mb-4 flex items-center">
          <span className="w-6 h-6 bg-accent flex items-center justify-center mr-3">
            <svg className="w-3 h-3 text-paper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </span>
          Connect With Me
        </h3>
        <div className="flex flex-wrap gap-4 pl-9">
          {social.filter(s => s.featured).map((socialProfile, index) => (
            <motion.a
              key={socialProfile.platform}
              href={socialProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-paper border border-accent/30 text-ink hover:bg-accent hover:text-paper transition-all duration-300 group"
            >
              <span className="capitalize font-medium">{socialProfile.platform}</span>
              <svg className="w-4 h-4 transition-colors duration-300 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        className="border-2 border-ink border-l-8 border-l-accent bg-paper-2 p-6 mt-10"
      >
        <h3 className="font-display text-[1.6rem] leading-[1.1] text-ink mb-2">
          {t('readyToCollaborate')}
        </h3>
        <p className="font-text text-[15.5px] leading-[1.65] text-ink-soft mb-6 max-w-[54ch]">
          {t('collaborateDescription')}
        </p>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`/${locale}/consult`} variant="accent">
            {t('startConversation')}
          </ButtonLink>
          <ButtonLink href={`/${locale}/projects`}>
            {t('viewMyWork')}
          </ButtonLink>
        </div>
      </motion.div>
    </motion.div>
  )
}