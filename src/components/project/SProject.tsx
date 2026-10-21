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
        <h1>Project not found</h1>
        <p>The project you're looking for doesn't exist or has been moved.</p>
        <Link className="button button-primary" to="/projects"><FiArrowLeft /> Back to all projects</Link>
      </section>
    )
  }

  return (
    <article className="project-detail page-width">
      <Link className="back-link" to="/projects"><FiArrowLeft /> All projects</Link>
      <div className="project-detail-heading">
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </div>

      <div className="project-detail-image">
        {project.image ? <img src={project.image} alt={`${project.title} preview`} /> : <div className="project-image-placeholder">No image available</div>}
      </div>

      <div className="project-detail-body">
        <div className="detail-facts">
          <div><span>Technologies</span><p>{project.technologies.join(' · ')}</p></div>
          <div><span>Category</span><p>{project.category}</p></div>
          <div className="detail-links">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site <FiArrowUpRight /></a>}
            {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer">Source code <FiGithub /></a>}
          </div>
        </div>
        <div className="project-description"><h2>About this project</h2><p>{project.description}</p></div>
      </div>
    </article>
  )
}

export default SProject
