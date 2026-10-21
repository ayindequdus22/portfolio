export const portfolioQuery = `{
  "site": *[_type == "siteSettings"][0]{
    name, monogram, heroTitle, intro, location, email, resumeUrl,
    socialLinks[]{label, url}
  },
  "projects": *[_type == "project"] | order(orderRank asc, _createdAt desc){
    _id, title, "slug": slug.current, summary, description,
    "image": image.asset->url, liveUrl, repositoryUrl, technologies, category, featured
  },
  "experiences": *[_type == "experience"] | order(startDate desc){
    _id, role, company, employmentType, startDate, endDate, current, highlights
  }
}`
