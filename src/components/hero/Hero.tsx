import React from 'react'

import profImg from "../../assets/profile-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
const hero = ():React.JSX.Element => {
    // max-mdLap:pt-20 h-[80vh]  max-mdLap:h-[90vh] max-tab:h-[95vh] max-mdPhone:h-[100vh]
    return (
        <div className='px-[10%] dfAc bg-[#F8F9FA]  gap-4 max-mdLap:flex-col  max-mdLap:pt-20 h-[80vh]  max-mdLap:h-auto max-tab:h-auto max-mdPhone:h-auto max-mdLap:pb-16'>
            <div className="details flex-[1_1_60%] max-mdLap:order-2 ">
                <h1 className='text-3xl font-semibold '>Hi! I'm <span className='font-bold text-4xl text-primary font-montserrat'>Opeyemi Ayinde</span></h1>
                
                <p className='text-base leading-[1.8] pt-3 pb-4'>
               A Software Developer with 3+ years of experience in building responsive, user-friendly applications.
                Skilled in state management, JavaScript, Dart, React, React Native, Flutter, and UI/UX design.</p>
               <a download="resume.docx" href={"../../assets/myresume.docx"}> <button className='btn font-montserrat font-semibold text-xl border-2 w-60 h-14'> RESUME
                    <FontAwesomeIcon icon={faDownload}className='pl-2' />
                </button></a>
            </div>
            <div className="image flex-[1_1_40%] bg-white dfAc max-mdLap:order-1 flex-shrink">
                <picture>
                    <img src={profImg} alt="profile image" className='h-[20rem] max-mdLap:h-[15rem] ' />
                </picture>
            </div>
        </div>
    )
}

export default hero