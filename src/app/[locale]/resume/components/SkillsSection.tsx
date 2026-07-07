'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { SkillCategory, Skill } from '@/lib/types/resume'
import { SkillsRadarChart } from './SkillsRadarChart'
import { getTopSkills } from '@/lib/utils/resume'

interface SkillsSectionProps {
  skillCategories: SkillCategory[]
}

export function SkillsSection({ skillCategories }: SkillsSectionProps) {
  const t = useTranslations('resume.skillsSection')
  const allSkills = skillCategories.flatMap(category => category.skills)
  const topSkills = getTopSkills(allSkills, 8)

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

  return (
    <div className="p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold font-poppins text-brand-neutral-light mb-2">
          {t('title')}
        </h2>
        <p className="text-brand-neutral-light/70">
          {t('subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Skills Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-surface-raised/80 backdrop-blur rounded-xl shadow-lg border border-edge p-6"
        >
          <h3 className="text-xl font-bold font-poppins text-ink mb-4">
            {t('topSkillsOverview')}
          </h3>
          <SkillsRadarChart skills={topSkills} />
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="space-y-4"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="bg-surface-raised/80 backdrop-blur rounded-xl shadow-lg border border-edge p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold font-poppins text-ink">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.slice(0, 4).map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detailed Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="space-y-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            variants={itemVariants}
            className="bg-surface-raised/80 backdrop-blur rounded-xl shadow-lg border border-edge p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h3 className="text-xl font-bold font-poppins text-ink">
                  {category.name}
                </h3>
                <p className="text-sm text-ink-muted">
                  {category.skills.length} {t('skills')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} t={t} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

interface SkillBarProps {
  skill: Skill
}

function SkillBar({ skill }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-ink">
          {skill.name}
        </span>
        <span className="text-xs text-ink-muted">
          {skill.yearsExperience}y
        </span>
      </div>
      <div className="w-full bg-edge rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(skill.level / 10) * 100}%` }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="h-2 rounded-full bg-gradient-accent"
        />
      </div>
    </div>
  )
}

interface SkillCardProps {
  skill: Skill
  t: (key: string) => string
}

function SkillCard({ skill, t }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-surface/60 rounded-lg p-4 border border-edge hover:border-accent/40 hover:shadow-md transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-ink">
          {skill.name}
        </h4>
        {skill.featured && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-brand-accent3/15 text-brand-accent3">
            {t('featured')}
          </span>
        )}
      </div>

      <div className="flex items-center space-x-4 mb-3">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-ink-muted">{t('proficiency')}</span>
            <span className="text-xs font-medium text-ink">
              {skill.level}/10
            </span>
          </div>
          <div className="w-full bg-edge rounded-full h-1.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(skill.level / 10) * 100}%` }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="h-1.5 rounded-full bg-gradient-accent"
            />
          </div>
        </div>
      </div>

      <div className="text-xs text-ink-muted">
        {skill.yearsExperience} {t('yearsExperience')}
      </div>
    </motion.div>
  )
}