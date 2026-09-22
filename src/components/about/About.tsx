import { FiArrowUpRight } from 'react-icons/fi'
import profileImage from '../../assets/profile-removebg-preview.png'
import { usePortfolioContent } from '../../hooks/usePortfolioContent'

function About() {
  const { data } = usePortfolioContent()
  const { site } = data

  return (
    <section className="about section page-width" id="about" aria-labelledby="about-title">
      <div className="section-label"><span>02</span><span>About</span></div>
      <div className="about-grid">
        <div className="about-portrait">
          <div className="portrait-orbit" />
          <img src={profileImage} alt={site.name} />
          <p>Based in<br />Nigeria</p>
        </div>

        <div className="about-copy">
          <h2 id="about-title">A considered approach to building things that matter.</h2>
          <p>I&apos;m {site.name}, a frontend developer who enjoys the practical side of good design: finding the clearest path through a task, making it feel effortless, and accounting for the moments that don&apos;t go to plan.</p>
          <p>Over the last few years I&apos;ve worked across web and mobile products, from commerce experiments to security-conscious banking platforms. I care about legible systems, meaningful motion, and products that earn trust.</p>
          <div className="about-meta">
            <span>{site.location}</span>
            {site.resumeUrl && <a className="text-link" href={site.resumeUrl} target="_blank" rel="noreferrer">More about me <FiArrowUpRight /></a>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
