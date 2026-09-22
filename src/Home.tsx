import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Experience from './components/experience/Experience'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Project limit={4} />
      <Contact />
    </>
  )
}

export default Home
