import React from 'react'
import profImg from "../../assets/profile-removebg-preview.png"

const About = ():React.JSX.Element   => {
  return (
    <main className='px-[10%] dfAc bg-[#F8F9FA]  gap-4 max-mdLap:flex-col  max-mdLap:pt-32 h-[100vh]  max-mdPhone:h-[102vh] max-mdLap:pb-16'>
            <div className="details  max-mdLap:pt-4 flex-[1_1_60%] max-mdLap:order-2 ">
<h1 className='text-5xl font-semibold  text-primary font-montserrat pb-2'>About Me</h1>
<p className='text-lg font-medium max-mdPhone:text-base'>
I'm a passionate Software Developer with 3+ years of experience in building responsive and scalable web and mobile applications. Skilled in both front-end and back-end technologies like React, React Native, Express.js, Node.js, Flutter, MongoDB, and MySQL. I focus on solving problems, creating seamless user experiences, and continuously improving my skills.</p>
            </div>
            
            <div className="image flex-[1_1_40%] bg-white dfAc max-mdLap:order-1 flex-shrink">
                <picture>
                    <img src={profImg} alt="profile image" className='h-[20rem] max-mdLap:h-[15rem] ' />
                </picture>
            </div>
</main>
  )
}

export default About