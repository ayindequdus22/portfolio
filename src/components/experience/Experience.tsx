import { usePortfolioContent } from '../../hooks/usePortfolioContent'

function formatDate(value?: string) {
  if (!value) return 'Present'
  if (!/^\d{4}-\d{2}/.test(value)) return value

  return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(`${value}T12:00:00`))
}

function Experience() {
  const { data } = usePortfolioContent()

  return (
    <section className="experience section page-width" id="experience" aria-labelledby="experience-title">
      <div className="section-label"><span>04</span><span>Experience</span></div>
      <div className="experience-header">
        <h2 id="experience-title">Helping teams make complex products feel simple.</h2>
        <p>Selected roles, contracts, and collaborations.</p>
      </div>

      <div className="timeline">
        {data.experiences.map((experience, index) => (
          <article className="timeline-item" key={experience._id}>
            <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
            <div className="timeline-main">
              <p className="timeline-date">{formatDate(experience.startDate)} — {experience.current ? 'Present' : formatDate(experience.endDate)}</p>
              <h3>{experience.role}</h3>
              <div className="timeline-company"><span>{experience.company}</span><i>{experience.employmentType}</i></div>
            </div>
            <ul>
              {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
