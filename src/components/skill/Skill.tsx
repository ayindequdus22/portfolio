import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faDatabase, faLaptopCode, faMobileAlt,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Skill = (): React.JSX.Element => {
    const skills: { heading: string, icon: IconDefinition, body: string }[] = [
        { heading: "Frontend Development", icon: faLaptopCode, body: "I build responsive, user-friendly interfaces with modern tools like React.js and Tailwind CSS, focusing on aesthetics and performance." },
        { heading: "Backend Development", icon: faDatabase, body: "I design scalable APIs and secure server-side solutions using Node.js, Express, and databases like MongoDB and PostgreSQL." },
        { heading: "Mobile Development", icon: faMobileAlt, body: "I develop cross-platform mobile apps with Flutter and React Native, ensuring smooth performance and intuitive design." },
    ]
    // bg-[#f5fcff]
    return (
        <section className="px-[4%] pt-8" id='skills'>
            <h2 className='font-montserrat text-3xl font-semibold text-primary'>My Skills</h2>
            <div className='dfAc gap-4 pt-3 flex-wrap'>
                {skills.map((skill, index) => (
                    <div key={index} className='df-flDc  px-[4%] bg-[#202022] text-center  rounded-lg h-72 w-[25rem] max-tab:w-[40rem] group'>
                        <FontAwesomeIcon icon={skill.icon} className='text-2xl bg-white  text-[rgb(160,160,160)] p-4 rounded-full group-hover:bg-primary group-hover:text-white  ease-linear duration-300' />
                        <h4 className='text-2xl font-medium pt-2 pb-2'>{skill.heading}</h4>
                        <p className='text-base'>{skill.body}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Skill
//  With an eye for detail, I ensure designs are not only visually appealing but also accessible and optimized for performance across devices.
// Proficient in managing databases like MongoDB and MySql, I design scalable APIs and handle complex data operations to power seamless user experiences
//  By focusing on performance optimization and intuitive design, Iioritize both functionality and aesthetics.