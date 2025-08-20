import { ResumeData, WorkExperience, ExperienceMetrics, TimelineEvent, Skill } from '@/lib/types/resume'

export function calculateExperience(experiences: WorkExperience[]): ExperienceMetrics {
  const now = new Date()
  let totalMonths = 0
  const byCategory: Record<string, number> = {}
  const byTechnology: Record<string, number> = {}
  const byCompany: Record<string, number> = {}
  
  let currentPosition: WorkExperience | undefined

  experiences.forEach(exp => {
    const startDate = new Date(exp.startDate)
    const endDate = exp.endDate ? new Date(exp.endDate) : now
    
    if (!exp.endDate) {
      currentPosition = exp
    }
    
    const monthsDiff = differenceInMonths(endDate, startDate)
    totalMonths += monthsDiff
    
    // Track by company
    byCompany[exp.company] = (byCompany[exp.company] || 0) + monthsDiff
    
    // Track by technology
    exp.technologies.forEach(tech => {
      byTechnology[tech] = (byTechnology[tech] || 0) + monthsDiff
    })
    
    // Track by position category (simplified)
    const category = categorizePosition(exp.position)
    byCategory[category] = (byCategory[category] || 0) + monthsDiff
  })
  
  return {
    totalYears: Math.floor(totalMonths / 12),
    totalMonths,
    byCategory: convertMonthsToYears(byCategory),
    byTechnology: convertMonthsToYears(byTechnology),
    byCompany: convertMonthsToYears(byCompany),
    currentPosition
  }
}

export function createTimeline(resumeData: ResumeData): TimelineEvent[] {
  const events: TimelineEvent[] = []
  
  // Add work experiences
  resumeData.experience.forEach(exp => {
    events.push({
      id: `work-${exp.id}`,
      date: new Date(exp.startDate),
      type: 'work',
      title: exp.position,
      subtitle: exp.company,
      description: exp.description,
      icon: '💼',
      color: '#3B82F6',
      data: exp
    })
  })
  
  // Add education
  resumeData.education.forEach(edu => {
    events.push({
      id: `education-${edu.id}`,
      date: new Date(edu.startDate),
      type: 'education',
      title: edu.degree,
      subtitle: edu.institution,
      description: edu.description,
      icon: '🎓',
      color: '#10B981',
      data: edu
    })
  })
  
  // Add major projects
  resumeData.projects.filter(p => p.featured).forEach(project => {
    events.push({
      id: `project-${project.id}`,
      date: new Date(project.startDate),
      type: 'project',
      title: project.name,
      subtitle: project.role,
      description: project.description,
      icon: '🚀',
      color: '#F59E0B',
      data: project
    })
  })
  
  // Add achievements
  resumeData.achievements.forEach(achievement => {
    events.push({
      id: `achievement-${achievement.id}`,
      date: new Date(achievement.date),
      type: 'achievement',
      title: achievement.title,
      subtitle: achievement.organization,
      description: achievement.description,
      icon: '🏆',
      color: '#EF4444',
      data: achievement
    })
  })
  
  // Sort by date (most recent first)
  return events.sort((a, b) => b.date.getTime() - a.date.getTime())
}

export function getTopSkills(skills: Skill[], count: number = 10): Skill[] {
  return skills
    .filter(skill => skill.featured || skill.level >= 7)
    .sort((a, b) => {
      // Sort by featured first, then by level, then by years of experience
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      if (a.level !== b.level) return b.level - a.level
      return b.yearsExperience - a.yearsExperience
    })
    .slice(0, count)
}

export function formatDuration(startDate: Date, endDate?: Date): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  
  const months = differenceInMonths(end, start)
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  
  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
  }
  
  if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`
  }
  
  return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
}

export function formatDateRange(startDate: Date, endDate?: Date): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : null
  
  const formatOptions: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short' 
  }
  
  const startFormatted = start.toLocaleDateString('en-US', formatOptions)
  const endFormatted = end ? end.toLocaleDateString('en-US', formatOptions) : 'Present'
  
  return `${startFormatted} - ${endFormatted}`
}

export function calculateTotalExperience(experiences: WorkExperience[]): number {
  const metrics = calculateExperience(experiences)
  return metrics.totalYears
}

export function groupSkillsByCategory(skills: Skill[]): Record<string, Skill[]> {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)
}

export function getSkillsForVisualization(skills: Skill[], maxSkills: number = 8): Skill[] {
  return skills
    .filter(skill => skill.featured)
    .sort((a, b) => b.level - a.level)
    .slice(0, maxSkills)
}

// Helper functions
function differenceInMonths(dateLeft: Date, dateRight: Date): number {
  const yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
  const monthDiff = dateLeft.getMonth() - dateRight.getMonth()
  return yearDiff * 12 + monthDiff
}

function categorizePosition(position: string): string {
  const lowerPosition = position.toLowerCase()
  
  if (lowerPosition.includes('devops') || lowerPosition.includes('infrastructure')) {
    return 'DevOps & Infrastructure'
  }
  if (lowerPosition.includes('engineer') || lowerPosition.includes('developer')) {
    return 'Software Development'
  }
  if (lowerPosition.includes('consultant')) {
    return 'Consulting'
  }
  if (lowerPosition.includes('lead') || lowerPosition.includes('senior')) {
    return 'Leadership'
  }
  
  return 'Other'
}

function convertMonthsToYears(monthsRecord: Record<string, number>): Record<string, number> {
  const result: Record<string, number> = {}
  Object.entries(monthsRecord).forEach(([key, months]) => {
    result[key] = parseFloat((months / 12).toFixed(1))
  })
  return result
}

export function validateResumeData(data: ResumeData): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  // Validate personal info
  if (!data.personal.name?.trim()) {
    errors.push('Personal name is required')
  }
  if (!data.personal.title?.trim()) {
    errors.push('Personal title is required')
  }
  if (!data.personal.email?.trim() || !isValidEmail(data.personal.email)) {
    errors.push('Valid email is required')
  }
  
  // Validate experience dates
  data.experience.forEach((exp, index) => {
    if (!exp.startDate) {
      errors.push(`Experience ${index + 1}: Start date is required`)
    }
    if (exp.endDate && exp.startDate && new Date(exp.endDate) < new Date(exp.startDate)) {
      errors.push(`Experience ${index + 1}: End date cannot be before start date`)
    }
  })
  
  // Validate skills
  data.skills.forEach(category => {
    category.skills.forEach((skill, index) => {
      if (skill.level < 1 || skill.level > 10) {
        errors.push(`Skill "${skill.name}": Level must be between 1 and 10`)
      }
      if (skill.yearsExperience < 0) {
        errors.push(`Skill "${skill.name}": Years of experience cannot be negative`)
      }
    })
  })
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}