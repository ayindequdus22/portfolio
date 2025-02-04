import React from 'react'
import profImg from "../../assets/profile-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
// bg-[#F8F9FA]  bg-white
const hero = ():React.JSX.Element => {
    return (
        <main className='px-[10%] dfAc bg-[#2a2a2a]  gap-4 max-mdLap:flex-col max-phone:pt-32  max-mdLap:pt-20 h-[80vh]  max-mdLap:h-auto max-tab:h-auto max-mdPhone:h-auto max-mdLap:pb-16'>
            <div className="details flex-[1_1_60%] max-mdLap:order-2 ">
                <h1 className='text-3xl font-semibold '>Hi! I'm <span className='font-bold text-4xl text-primary font-montserrat'>Opeyemi Ayinde</span></h1>
                
                <p className='text-base leading-[1.8] pt-3 pb-4'>
                Software Developer with 3+ years of experience in building responsive, scalable applications. Skilled in React, React Native, Flutter,Next.js, Node.js, Redux, JavaScript, MongoDB, MySQL, Passport.js, JWT, and UI/UX design.</p>
               <a  href={"https://docs.google.com/document/d/1iJ9zQFpN5CJZzMMgJH5IAK3BVQXfbMwdRBOAHulOMCM/edit?usp=sharing"} target="_blank" rel="noopener noreferrer"> <button className='btn font-montserrat font-semibold text-xl border-2 w-60 h-14'> RESUME
                    <FontAwesomeIcon icon={faDownload}className='pl-2' />
                </button></a>
            </div>
            <div className="image flex-[1_1_40%]  dfAc max-mdLap:order-1 flex-shrink">
                <picture>
                    <img src={profImg} alt="profile image" className='h-[18rem] max-mdLap:h-[15rem] ' />
                </picture>
            </div>
        </main>
    )
}

export default hero