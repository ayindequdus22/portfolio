import rawProjects from '../assets/projects.json'
import type { ExperienceItem, PortfolioContent, Project } from './types'

const projects: Project[] = rawProjects.map((project) => {
  const isGitHubLink = project.link.includes('github.com')
  return {
    _id: `local-project-${project.id}`,
    title: project.title,
    slug: project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    summary: project.ldescription.trim(),
    description: project.bdescription.trim(),
    image: project.image.replace('http://', 'https://'),
    liveUrl: isGitHubLink ? undefined : project.link,
    repositoryUrl: isGitHubLink ? project.link : undefined,
    technologies: project.category === 'mobile' ? ['Flutter', 'Dart', 'REST APIs'] : ['React', 'TypeScript', 'Tailwind CSS'],
    category: project.category,
    featured: project.id < 5,
  }
})

const experiences: ExperienceItem[] = [
  {
    _id: 'local-experience-reliance',
    role: 'Frontend Developer',
    company: 'Reliance MFB',
    employmentType: 'Contract',
    startDate: 'Jun 2026',
    endDate: 'Sep 2026',
    highlights: [
      'Built a complete digital banking platform spanning accounts, transfers, bills, investments, statements, and transaction history.',
      'Implemented secure authentication flows including MFA, protected routes, session restoration, token refresh, and inactivity handling.',
      'Created reusable transaction patterns for account validation, OTP and PIN authorization, feedback, errors, and cache invalidation.',
    ],
  },
  {
    _id: 'local-experience-nomad',
    role: 'Frontend Developer',
    company: 'Nomad Technologies',
    employmentType: 'Full-time',
    startDate: 'Jun 2025',
    endDate: 'May 2026',
    highlights: [
      'Collaborated with product designers and developers on core web applications supporting microfinance operations.',
      'Used React, TypeScript, and Tailwind CSS to create scalable, maintainable frontend architecture.',
      'Improved performance and UI consistency across banking-related components.',
    ],
  },
  {
    _id: 'local-experience-avenu',
    role: 'Flutter Developer',
    company: 'AvenoTrust',
    employmentType: 'Contract',
    startDate: 'Jun 2025',
    highlights: [
      'Shipped features for a production fintech application used by thousands of customers.',
      'Orchestrated predictable app-wide state management with GetX.',
      'Integrated REST APIs with Dio for authentication, data fetching, and resilient error handling.',
    ],
  },
  {
    _id: 'local-experience-lightway',
    role: 'Frontend Developer',
    company: 'Lightway MFB',
    employmentType: 'Contract',
    startDate: 'Aug 2025',
    highlights: [
      'Built secure, approachable financial interfaces with a cross-functional product team.',
      'Used TanStack Query for live data synchronization around money transfers and transaction requests.',
      'Applied React Hook Form and hashing techniques to strengthen sensitive financial flows.',
    ],
  },
  {
    _id: 'local-experience-elite-oceanic',
    role: 'Frontend Developer',
    company: 'EliteOceanic',
    employmentType: 'Contract',
    startDate: 'Oct 2024',
    endDate: 'Nov 2024',
    highlights: [
      'Styled the app with Tailwind CSS and implemented GSAP animations for smooth transitions.',
      'Designed and implemented scalable frontend architecture, improving code maintainability and team efficiency.',
      'Optimized rendering performance and reduced load time through code-splitting and lazy loading.',
    ],
  },
  {
    _id: 'local-experience-split-cost',
    role: 'Frontend Developer',
    company: 'ADC Hackathon 2025 — Split-The-Cost',
    employmentType: 'Hackathon',
    startDate: 'Mar 2025',
    endDate: 'May 2025',
    highlights: [
      'Designed an expense-tracking app using React, TypeScript, React Router, TanStack Query, and React Hook Form.',
      'Built light, dark, and system theme support with React Context and Tailwind CSS.',
      'Implemented real-time expense entry and a clear breakdown of who owes what and how to settle.',
    ],
  },
  {
    _id: 'local-experience-menubars',
    role: 'Backend Developer',
    company: 'Menubars',
    employmentType: 'Contract',
    startDate: '2025',
    highlights: [
      'Implemented JWT and OAuth authentication plus role-based access control for admins, sellers, customers, and drivers.',
      'Introduced two-factor authentication with SMS and email OTP delivery.',
      'Used rate limiting, MongoDB, and PostgreSQL to support a secure, reliable product under load.',
    ],
  },
]

export const fallbackContent: PortfolioContent = {
  site: {
    name: 'Qudus',
    monogram: 'QA',
    heroTitle: 'Hey, I\'m Qudus. I build web and mobile applications.',
    intro: 'I build responsive web applications, mobile experiences, and frontend systems, working across modern frontend frameworks and backend integrations.',
    location: 'Nigeria',
    email: 'abdulqudusayinde60@gmail.com',
    resumeUrl: 'https://docs.google.com/document/d/1iJ9zQFpN5CJZzMMgJH5IAK3BVQXfbMwdRBOAHulOMCM/edit?usp=drive_link',
    socialLinks: [
      { label: 'GitHub', url: 'https://github.com/ayindequdus22' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/opeyemi-ayinde-08540823b/' },
      { label: 'X / Twitter', url: 'https://x.com/anteqs22' },
    ],
  },
  projects,
  experiences,
}
