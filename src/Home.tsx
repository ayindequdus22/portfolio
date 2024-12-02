import React from 'react'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Project from './components/project/Project'
import Skill from './components/skill/Skill'

const Home = ():React.JSX.Element => {
  return (
<>
<Hero/>
<Skill/>
<About/>
</>  )
}

export default Home