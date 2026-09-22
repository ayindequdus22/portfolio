import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import { usePortfolioContent } from '../../hooks/usePortfolioContent'

function Hero() {
  const { data } = usePortfolioContent()
  const { site, projects } = data

  return (
    <section className="hero page-width" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span className="eyebrow"><i /> {site.heroEyebrow}</span>
        <span className="hero-index">01 — 05</span>
      </div>

      <div className="hero-title-wrap">
        <p className="hero-kicker">{site.role}</p>
        <h1 id="hero-title">{site.heroTitle}</h1>
      </div>

      <div className="hero-bottom">
        <p className="hero-intro">{site.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore selected work <FiArrowDownRight /></a>
          {site.resumeUrl && <a className="text-link" href={site.resumeUrl} target="_blank" rel="noreferrer">View résumé <FiArrowUpRight /></a>}
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <span>FRONTEND</span><b>✳</b><span>PRODUCT</span><b>✳</b><span>FINTECH</span><b>✳</b><span>{String(projects.length).padStart(2, '0')} SELECTED BUILDS</span>
      </div>
    </section>
  )
}

export default Hero
