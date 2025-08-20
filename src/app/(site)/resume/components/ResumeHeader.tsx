'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ResumeData } from '@/lib/types/resume'
import { calculateTotalExperience } from '@/lib/utils/resume'

interface ResumeHeaderProps {
  resumeData: ResumeData
}

export function ResumeHeader({ resumeData }: ResumeHeaderProps) {
  const { personal, social, experience } = resumeData
  const totalExperience = calculateTotalExperience(experience)

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
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900 shadow-xl">
            <Image
              src={personal.avatar || '/images/hero_3.jpg'}
              alt={personal.name}
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Status Indicator */}
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Basic Info */}
        <div className="flex-1">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
          >
            {personal.name}
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4"
          >
            {personal.title}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{personal.location}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          {personal.summary}
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
      >
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{totalExperience}+</div>
          <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Years Experience</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">{experience.length}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Companies</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{resumeData.projects.length}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Projects</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
            {resumeData.skills.reduce((total, category) => total + category.skills.length, 0)}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Skills</div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap gap-4"
      >
        {social.filter(s => s.featured).map((socialProfile, index) => (
          <motion.a
            key={socialProfile.platform}
            href={socialProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-300"
          >
            <span className="capitalize">{socialProfile.platform}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}