export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone?: string
  location: string
  website?: string
  summary: string
  avatar?: string
}

export interface SocialProfile {
  platform: string
  username: string
  url: string
  icon?: string
  featured?: boolean
}

export interface WorkExperience {
  id: string
  company: string
  position: string
  startDate: Date
  endDate?: Date
  location: string
  description: string
  responsibilities: string[]
  achievements?: string[]
  technologies: string[]
  companyLogo?: string
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship'
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: Date
  endDate?: Date
  gpa?: string
  description?: string
  achievements?: string[]
  location: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: Date
  expiryDate?: Date
  credentialId?: string
  credentialUrl?: string
  description?: string
}

export interface SkillCategory {
  name: string
  skills: Skill[]
  icon?: string
  color?: string
}

export interface Skill {
  name: string
  level: number // 1-10 scale
  yearsExperience: number
  category: string
  certifications?: string[]
  keywords?: string[]
  featured?: boolean
}

export interface Project {
  id: string
  name: string
  description: string
  longDescription?: string
  technologies: string[]
  startDate: Date
  endDate?: Date
  status: 'completed' | 'in-progress' | 'planned' | 'cancelled'
  role: string
  teamSize?: number
  images?: string[]
  demoUrl?: string
  githubUrl?: string
  highlights?: string[]
  impact?: {
    metric: string
    value: string
    description?: string
  }[]
  featured?: boolean
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: Date
  category: 'award' | 'recognition' | 'publication' | 'speaking' | 'other'
  organization?: string
  url?: string
}

export interface Language {
  name: string
  level: 'native' | 'fluent' | 'professional' | 'intermediate' | 'beginner'
  certifications?: string[]
}

export interface Volunteer {
  id: string
  organization: string
  position: string
  startDate: Date
  endDate?: Date
  description: string
  highlights?: string[]
  website?: string
}

export interface ResumeData {
  personal: PersonalInfo
  social: SocialProfile[]
  experience: WorkExperience[]
  education: Education[]
  skills: SkillCategory[]
  projects: Project[]
  achievements: Achievement[]
  certifications: Certification[]
  languages: Language[]
  volunteer: Volunteer[]
  lastUpdated: Date
  version: string
}

export interface ResumeConfig {
  theme: 'light' | 'dark' | 'auto'
  showPersonalInfo: boolean
  showSocialProfiles: boolean
  showExperience: boolean
  showEducation: boolean
  showSkills: boolean
  showProjects: boolean
  showAchievements: boolean
  showCertifications: boolean
  showLanguages: boolean
  showVolunteer: boolean
  sectionsOrder: ResumeSection[]
  animationsEnabled: boolean
  exportFormat: 'pdf' | 'json' | 'html'
}

export type ResumeSection = 
  | 'personal'
  | 'social' 
  | 'experience'
  | 'education'
  | 'skills'
  | 'projects'
  | 'achievements'
  | 'certifications'
  | 'languages'
  | 'volunteer'

export interface TimelineEvent {
  id: string
  date: Date
  type: 'work' | 'education' | 'project' | 'achievement' | 'certification'
  title: string
  subtitle?: string
  description?: string
  icon?: string
  color?: string
  data?: WorkExperience | Education | Project | Achievement | Certification
}

export interface SkillsVisualization {
  type: 'radar' | 'bar' | 'bubble' | 'treemap'
  categories: SkillCategory[]
  showYearsExperience: boolean
  showProficiencyLevel: boolean
  maxLevel: number
}

export interface ExperienceMetrics {
  totalYears: number
  totalMonths: number
  byCategory: Record<string, number>
  byTechnology: Record<string, number>
  byCompany: Record<string, number>
  currentPosition?: WorkExperience
}