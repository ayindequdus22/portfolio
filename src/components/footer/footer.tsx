import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faWhatsapp, IconDefinition } from '@fortawesome/free-brands-svg-icons';
const footer = ():React.JSX.Element => {
    const icons:{icon:IconDefinition,link:string}[] = [
    {
        icon:faWhatsapp,link:"" 
      },
      {
        icon:faTwitter,link:"https://x.com/anteqs22"  
      },
      {
        icon:faLinkedin,link:"https://www.linkedin.com/in/opeyemi-ayinde-08540823b/"  
      },
      {
        icon:faGithub,link:"https://github.com/ayindequdus22"  
      },
]
  return (
<section className='dfAc gap-4'>
    {icons.map((v,i)=>(
<a href={v.link} key={i} target='_blank'><FontAwesomeIcon icon={v.icon} className='text-3xl text-primary'/></a>
    ))}

</section>
)
}

export default footer