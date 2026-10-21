import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const skillCategories = [
  { name: 'Web Development', skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS'] },
  { name: 'Mobile Development', skills: ['React Native', 'Expo', 'Flutter', 'Dart'] },
  { name: 'Backend & Data', skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'MySQL'] },
  { name: 'Tools & Workflow', skills: ['Git', 'GitHub', 'Docker', 'Figma', 'Vercel'] },
]

function SkillCategory({ name, skills, index }: (typeof skillCategories)[number] & { index: number }) {
  const [cardRef, cardVisible] = useIntersectionObserver<HTMLDivElement>()

  return (
    <article
      className={`skill-category ${cardVisible ? 'visible' : ''}`}
      ref={cardRef}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3>{name}</h3>
      <ul className="skill-list">
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </article>
  )
}

function Skill() {
  return (
    <section className="section page-width" id="skills" aria-labelledby="skills-title">
      <div className="section-label"><span>03</span><span>Technical Skills</span></div>
      <div className="skills-section">
        <h2 id="skills-title">Technologies I work with</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.name} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
