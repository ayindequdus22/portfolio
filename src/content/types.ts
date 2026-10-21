export type SocialLink = {
  label: string
  url: string
}

export type SiteSettings = {
  name: string
  monogram: string
  heroTitle: string
  intro: string
  location: string
  email: string
  resumeUrl?: string
  socialLinks: SocialLink[]
}

export type Project = {
  _id: string
  title: string
  slug: string
  summary: string
  description: string
  image: string
  liveUrl?: string
  repositoryUrl?: string
  technologies: string[]
  category: string
  featured?: boolean
}

export type ExperienceItem = {
  _id: string
  role: string
  company: string
  employmentType: string
  startDate: string
  endDate?: string
  current?: boolean
  highlights: string[]
}

export type PortfolioContent = {
  site: SiteSettings
  projects: Project[]
  experiences: ExperienceItem[]
}
