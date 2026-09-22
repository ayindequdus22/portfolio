import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { usePortfolioContent } from '../../hooks/usePortfolioContent'

type ProjectProps = {
  limit?: number
}

function Project({ limit }: ProjectProps) {
  const { data } = usePortfolioContent()
  const projects = limit ? data.projects.filter((project) => project.featured).slice(0, limit) : data.projects
  const displayedProjects = projects.length ? projects : data.projects.slice(0, limit)

  return (
    <section className="projects section page-width" id="work" aria-labelledby="projects-title">
      <div className="section-label"><span>05</span><span>Selected work</span></div>
      <div className="projects-header">
        <h2 id="projects-title">A selection of products built with equal parts rigour and curiosity.</h2>
        {limit && <Link className="text-link" to="/projects">See all work <FiArrowUpRight /></Link>}
      </div>

      <div className="project-grid">
        {displayedProjects.map((project, index) => (
          <article className="project-card" key={project._id}>
            <Link to={`/projects/${project.slug}`} className="project-image" aria-label={`View ${project.title} project details`}>
              {project.image ? <img src={project.image} alt="" loading={index > 1 ? 'lazy' : 'eager'} /> : <div className="project-image-placeholder" />}
              <span className="project-arrow"><FiArrowUpRight /></span>
            </Link>
            <div className="project-info">
              <div><span className="project-number">{String(index + 1).padStart(2, '0')}</span><span className="project-category">{project.category}</span></div>
              <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
              <p>{project.summary}</p>
              <div className="tag-list">{project.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Project
