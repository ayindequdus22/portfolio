import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { usePortfolioContent } from '../../hooks/usePortfolioContent'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import type { Project as ProjectType } from '../../content/types'

type ProjectProps = {
  limit?: number
}

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const [cardRef, cardVisible] = useIntersectionObserver<HTMLDivElement>()

  return (
    <article
      className={`project-card ${cardVisible ? 'visible' : ''}`}
      ref={cardRef}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link to={`/projects/${project.slug}`} className="project-image" aria-label={`View ${project.title} project details`}>
        {project.image ? <img src={project.image} alt="" loading={index > 1 ? 'lazy' : 'eager'} /> : <div className="project-image-placeholder">No image</div>}
      </Link>
      <div className="project-info">
        <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <div className="project-meta">
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.technologies.slice(0, 3).join(', ')}</span>
        </div>
        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="View live site">
              <FiExternalLink /> Live
            </a>
          )}
          {project.repositoryUrl && (
            <a href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label="View source code">
              <FiGithub /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function Project({ limit }: ProjectProps) {
  const { data } = usePortfolioContent()
  const featuredProjects = data.projects.filter((project) => project.featured)
  const displayedProjects = limit
    ? (featuredProjects.length ? featuredProjects : data.projects).slice(0, limit)
    : data.projects

  return (
    <section className="projects section page-width" id="work" aria-labelledby="projects-title">
      <div className="section-label"><span>05</span><span>Projects</span></div>
      <div className="projects-header">
        <h2 id="projects-title">Selected projects</h2>
        {limit && <Link className="text-link" to="/projects">View all projects <FiArrowUpRight /></Link>}
      </div>

      <div className="project-grid">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={project._id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Project
