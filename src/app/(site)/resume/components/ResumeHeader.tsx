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
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-brand-accent1/30 shadow-xl">
            <Image
              src={personal.avatar || '/images/avatars/avatar.png'}
              alt={personal.name}
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Status Indicator */}
          <div className="absolute -bottom-2 -right-2 bg-brand-accent2 w-6 h-6 rounded-full border-4 border-brand-neutral-light flex items-center justify-center">
            <div className="w-2 h-2 bg-brand-neutral-light rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Basic Info */}
        <div className="flex-1">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-poppins text-brand-neutral-light mb-2"
          >
            {personal.name}
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-brand-accent1 font-medium mb-4"
          >
            {personal.title}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 text-brand-neutral-light/70"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-brand-accent1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{personal.location}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-brand-accent2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <h2 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-4 flex items-center">
          <span className="w-8 h-8 bg-brand-accent1 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
          About Me
        </h2>
        <p className="text-lg text-brand-neutral-light/80 leading-relaxed pl-11">
          {personal.summary}
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
      >
        <div className="text-center p-6 bg-gradient-to-br from-brand-accent1/20 to-brand-accent1/10 rounded-xl border border-brand-accent1/20">
          <div className="text-3xl font-bold font-poppins text-brand-accent1">{totalExperience}+</div>
          <div className="text-sm text-brand-neutral-light/70 mt-1">Years Experience</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-brand-accent2/20 to-brand-accent2/10 rounded-xl border border-brand-accent2/20">
          <div className="text-3xl font-bold font-poppins text-brand-accent2">{experience.length}</div>
          <div className="text-sm text-brand-neutral-light/70 mt-1">Companies</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-brand-accent3/20 to-brand-accent3/10 rounded-xl border border-brand-accent3/20">
          <div className="text-3xl font-bold font-poppins text-brand-accent3">{resumeData.projects.length}</div>
          <div className="text-sm text-brand-neutral-light/70 mt-1">Projects</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-brand-accent1/20 to-brand-accent2/10 rounded-xl border border-brand-accent1/20">
          <div className="text-3xl font-bold font-poppins text-brand-accent1">
            {resumeData.skills.reduce((total, category) => total + category.skills.length, 0)}
          </div>
          <div className="text-sm text-brand-neutral-light/70 mt-1">Skills</div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={itemVariants}
        className="mb-8"
      >
        <h3 className="text-lg font-bold font-poppins text-brand-neutral-light mb-4 flex items-center">
          <span className="w-6 h-6 bg-brand-accent2 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-3 h-3 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="flex items-center space-x-2 px-4 py-2 bg-brand-primary border border-brand-accent1/30 text-brand-neutral-light rounded-lg hover:bg-brand-accent1 hover:text-brand-primary transition-all duration-300 group"
            >
              <span className="capitalize font-medium">{socialProfile.platform}</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        className="relative bg-gradient-to-r from-brand-accent1/20 to-brand-accent2/20 rounded-2xl p-8 border border-brand-accent1/30 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300E5FF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-bold font-poppins text-brand-neutral-light mb-3">
            Ready to Collaborate?
          </h3>
          <p className="text-brand-neutral-light/80 mb-6">
            Let's discuss how I can contribute to your team's success in DevOps and cloud architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consult"
              className="group inline-flex justify-center items-center py-3 px-6 bg-brand-accent1 text-brand-primary rounded-lg hover:bg-brand-accent2 transition-all duration-300 font-semibold"
            >
              Start a Conversation
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
            
            <a
              href="/projects"
              className="group inline-flex justify-center items-center py-3 px-6 text-brand-neutral-light rounded-lg border border-brand-accent1/30 hover:bg-brand-accent1 hover:text-brand-primary transition-all duration-300 font-medium"
            >
              View My Work
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}