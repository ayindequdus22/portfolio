import { usePortfolioContent } from '../../hooks/usePortfolioContent'

function Skill() {
  const { data } = usePortfolioContent()

  return (
    <section className="capabilities section page-width" aria-labelledby="capabilities-title">
      <div className="section-label"><span>03</span><span>Focus areas</span></div>
      <div className="capabilities-heading">
        <h2 id="capabilities-title">From the first interaction to the systems underneath it.</h2>
        <p>Thoughtful execution across the parts of a product people see, use, and depend on.</p>
      </div>
      <div className="capability-list">
        {data.site.capabilities.map((capability) => (
          <article className="capability" key={capability.number}>
            <span>{capability.number}</span>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skill
