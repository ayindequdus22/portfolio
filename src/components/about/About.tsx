import React, { useRef } from 'react'
import profImg from "../../assets/profile-removebg-preview.png"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// bg-[#F8F9FA]
const About = (): React.JSX.Element => {
  const imageRef = useRef(null);
  const containerRef  =  useRef(null)
  useGSAP(() => {
    gsap.fromTo(imageRef.current, { y: "2rem", opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
    gsap.fromTo(containerRef.current,      { x: "-1vw", opacity: 0. }, 
       { x: "0", opacity: 1, duration: 3 });
    // let tl = gsap.timeline();

    // tl.fromTo("#heroHeaderText", 
    //   { x: "-100vw", opacity: 0.3 }, 
    //   { x: "0", opacity: 1, duration: 1 }
    // )
    // .fromTo("#heroDetails", 
    //   { x: "-100vw", opacity: 0.4 }, 
    //   { x: "0", opacity: 1, duration: 1 }
    // )
    // .fromTo("#heroBtn", 
    //   { x: "-100vw", opacity: 0.4 }, 
    //   { x: "0", opacity: 1, duration: 1 }
    // );

  });
  return (
    <main className='px-[10%] dfAc  bg-[#2a2a2a]   gap-4 max-mdLap:flex-col  max-mdLap:pt-32 h-[100vh]  max-mdPhone:h-[102vh] max-mdLap:pb-16'>
      <div className="details  max-mdLap:pt-4 flex-[1_1_60%] max-mdLap:order-2 " ref={containerRef}>
        <h1 className='text-5xl font-semibold  text-primary font-montserrat pb-2'>About Me</h1>
        <p className='text-lg font-medium max-mdPhone:text-base'>
          I'm a passionate Software Developer with 3+ years of experience in building responsive and scalable web and mobile applications. Skilled in both front-end and back-end technologies like React, React Native, Express.js, Node.js, Flutter, MongoDB, and MySQL. I focus on solving problems, creating seamless user experiences, and continuously improving my skills.</p>
      </div>

      <div ref={imageRef} className="image flex-[1_1_40%] bg-white dfAc max-mdLap:order-1 flex-shrink">
        <picture>
          <img src={profImg} alt="profile image" className='h-[20rem] max-mdLap:h-[15rem] ' />
        </picture>
      </div>
    </main>
  )
}

export default About