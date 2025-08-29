import React, { useEffect, useRef } from 'react'
import profImg from "../../assets/profile-removebg-preview.png"
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import { useGSAP, } from "@gsap/react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faWhatsapp, IconDefinition } from '@fortawesome/free-brands-svg-icons';
// bg-[#F8F9FA]  bg-white
gsap.registerPlugin(useGSAP);
const hero = (): React.JSX.Element => {

    const icons: { icon: IconDefinition, link: string }[] = [
        {
            icon: faWhatsapp, link: ""
        },
        {
            icon: faTwitter, link: "https://x.com/anteqs22"
        },
        {
            icon: faLinkedin, link: "https://www.linkedin.com/in/opeyemi-ayinde-08540823b/"
        },
        {
            icon: faGithub, link: "https://github.com/ayindequdus22"
        },
    ]

    const imageRef = useRef<HTMLImageElement | null>(null);
    const detailsRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => { })
    useGSAP(() => {
        gsap.fromTo(imageRef.current, { x: 400, opacity: 0.3 }, { x: 0, opacity: 1, duration: 2 });
        let tl = gsap.timeline();

        tl.fromTo("#heroHeaderText",
            { x: "-100vw", opacity: 0.3 },
            { x: "0", opacity: 1, duration: 1 }
        )
            .fromTo("#heroDetails",
                { x: "-100vw", opacity: 0.4 },
                { x: "0", opacity: 1, duration: 1 }
            )
            .fromTo("#heroBtn",
                { x: "-100vw", opacity: 0.4 },
                { x: "0", opacity: 1, duration: 1 }
            );

    });
    return (
        <main className='px-[10%] dfAc bg-[#2a2a2a] h-screen'>
            {/* 
        <main className='px-[10%] dfAc bg-[#2a2a2a]  gap-4 max-mdLap:flex-col max-phone:pt-32  max-mdLap:pt-20 h-[80vh]  max-mdLap:h-auto max-tab:h-auto max-mdPhone:h-auto max-mdLap:pb-16'>
            <div className="details flex-[1_1_60%] max-mdLap:order-2 " ref={detailsRef}> */}

            <div className="details flex-[1_1_60%] place-items-center max-mdLap:order-2 " ref={detailsRef}>
                <h1 className='text-3xl font-semibold font-montserrat' id='heroHeaderText'>Hi! I'm  <TypeAnimation
                    sequence={[
                        "",
                        1000,
                        "Opeyemi Ayinde",
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="font-bold text-4xl text-primary font-montserrat"
                    repeat={Infinity}
                />

                </h1>
                <p className='font-roboto text-gray-300 font-medium text-xl py-2'>A Software Developer</p>
                <div className="flex gap-2 mt-2">
                    {icons.map((v, i) => (
                        <a href={v.link} key={i} target='_blank'
                            className='bg-[#26262A] border-[1px] rounded-full
              border-gray-500 h-12 w-12 flex items-center justify-center hover:text-primary duration-500 ease-out transition-colors hover:border-primary'>
                            <FontAwesomeIcon icon={v.icon} className='size-6 ' />
                        </a>
                    ))}
                </div>
                {/* <p className='text-base leading-[1.8] pt-3 pb-4' id='heroDetails'>
                    Software Developer with 3+ years of experience in building responsive, scalable applications. Skilled in React, React Native, Flutter,Next.js, Node.js, Redux, JavaScript, MongoDB, MySQL, Passport.js, JWT, and UI/UX design.</p> */}
                {/* <a className='btn  block leading-[3.5rem] dfAc text-center font-montserrat font-semibold text-xl border-2 w-60 ' id='heroBtn'
                 href={"https://docs.google.com/document/d/1iJ9zQFpN5CJZzMMgJH5IAK3BVQXfbMwdRBOAHulOMCM/edit?usp=drive_link"} 
                 target="_blank" rel="noopener noreferrer"> 
                RESUME
                    <FontAwesomeIcon icon={faDownload} className='pl-2' />
                </a> */}
            </div>
            {/* <div className="image flex-[1_1_40%]  dfAc max-mdLap:order-1 flex-shrink">
                <picture  >
                    <img ref={imageRef} src={profImg} alt="profile image" className='h-[18rem] max-mdLap:h-[15rem] ' />
                </picture>
            </div> */}
        </main>
    )
}

export default hero