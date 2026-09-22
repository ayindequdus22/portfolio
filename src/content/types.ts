export type SocialLink = {
  label: string
  url: string
}

export type Capability = {
  number: string
  title: string
  description: string
}

export type SiteSettings = {
  name: string
  monogram: string
  role: string
  heroEyebrow: string
  heroTitle: string
  intro: string
  availability: string
  location: string
  email: string
  resumeUrl?: string
  socialLinks: SocialLink[]
  capabilities: Capability[]
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
