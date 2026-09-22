import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import { usePortfolioContent } from '../../hooks/usePortfolioContent'

function SProject() {
  const { slug } = useParams()
  const { data } = usePortfolioContent()
  const project = data.projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="project-not-found page-width">
        <p className="eyebrow"><i /> Project not found</p>
        <h1>That project has moved.</h1>
        <Link className="button button-primary" to="/projects"><FiArrowLeft /> Back to all work</Link>
      </section>
    )
  }

  return (
    <article className="project-detail page-width">
      <Link className="back-link" to="/projects"><FiArrowLeft /> All work</Link>
      <div className="project-detail-heading">
        <div><p className="eyebrow"><i /> {project.category}</p><h1>{project.title}</h1></div>
        <p>{project.summary}</p>
      </div>

      <div className="project-detail-image">
        {project.image ? <img src={project.image} alt={`${project.title} preview`} /> : <div className="project-image-placeholder" />}
      </div>

      <div className="project-detail-body">
        <div className="detail-facts">
          <div><span>Built with</span><p>{project.technologies.join(' · ')}</p></div>
          <div><span>Category</span><p>{project.category}</p></div>
          <div className="detail-links">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site <FiArrowUpRight /></a>}
            {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer">Source <FiGithub /></a>}
          </div>
        </div>
        <div className="project-description"><h2>The build</h2><p>{project.description}</p></div>
      </div>
    </article>
  )
}

export default SProject
