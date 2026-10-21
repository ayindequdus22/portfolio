import { FiArrowDownRight, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { usePortfolioContent } from '../../hooks/usePortfolioContent'

function Hero() {
  const { data } = usePortfolioContent()
  const { site } = data
  const githubUrl = site.socialLinks.find(({ label }) => label.toLowerCase().includes('github'))?.url

  return (
    <section className="hero page-width" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">{site.heroTitle}</h1>
        <p className="hero-intro">{site.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View projects <FiArrowDownRight /></a>
          {githubUrl && <a className="button button-secondary" href={githubUrl} target="_blank" rel="noreferrer">GitHub <FiGithub /></a>}
          {site.resumeUrl && (
            <a className="text-link" href={site.resumeUrl} target="_blank" rel="noreferrer">
              Résumé <FiArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
