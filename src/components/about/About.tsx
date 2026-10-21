import { FiArrowUpRight } from 'react-icons/fi'
import { usePortfolioContent } from '../../hooks/usePortfolioContent'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

function About() {
  const { data } = usePortfolioContent()
  const { site } = data
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>()

  return (
    <section className="about section page-width" id="about" aria-labelledby="about-title">
      <div className="section-label"><span>02</span><span>About</span></div>
      <div className="about-grid">
        <div className={`about-copy ${contentVisible ? 'visible' : ''}`} ref={contentRef}>
          <h2 id="about-title">About me</h2>
          <p>
            I&apos;m {site.name}, a software engineer focused on building web and mobile applications. I enjoy solving practical product problems and improving my engineering skills through real-world projects.
          </p>
          <p>
            I work across modern frontend frameworks and backend integrations, building responsive applications and mobile experiences. My work spans from e-commerce platforms to fintech applications, with a focus on creating reliable, user-friendly systems.
          </p>
          <div className="about-meta">
            <span>{site.location}</span>
            {site.resumeUrl && <a className="text-link" href={site.resumeUrl} target="_blank" rel="noreferrer">Résumé <FiArrowUpRight /></a>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
