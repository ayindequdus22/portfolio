import { usePortfolioContent } from '../../hooks/usePortfolioContent'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import type { ExperienceItem } from '../../content/types'

const dateFormatter = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' })

function formatDate(value?: string) {
  if (!value) return 'Present'
  if (!/^\d{4}-\d{2}/.test(value)) return value

  return dateFormatter.format(new Date(`${value}T12:00:00`))
}

function TimelineItem({ experience, index }: { experience: ExperienceItem; index: number }) {
  const [itemRef, itemVisible] = useIntersectionObserver<HTMLDivElement>()

  return (
    <article
      className={`timeline-item ${itemVisible ? 'visible' : ''}`}
      ref={itemRef}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="timeline-date">
        {formatDate(experience.startDate)} — {experience.current ? 'Present' : formatDate(experience.endDate)}
      </div>
      <div className="timeline-content">
        <h3>{experience.role}</h3>
        <div className="timeline-company">
          <span>{experience.company}</span>
          {experience.employmentType && <span>· {experience.employmentType}</span>}
        </div>
        <ul className="timeline-highlights">
          {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </div>
    </article>
  )
}

function Experience() {
  const { data } = usePortfolioContent()

  return (
    <section className="experience section page-width" id="experience" aria-labelledby="experience-title">
      <div className="section-label"><span>04</span><span>Experience</span></div>
      <div className="experience-header">
        <h2 id="experience-title">Work experience</h2>
        <p>Selected roles and projects</p>
      </div>

      <div className="timeline">
        {data.experiences.map((experience, index) => (
          <TimelineItem key={experience._id} experience={experience} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Experience
