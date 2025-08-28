import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

const Contact = (): React.JSX.Element => {
  return (
    <section className='pt-28 px-40  max-mdLap:px-20 max-tab:px-12 max-mdPhone:px-4'>

      <div className='flex gap-4 min-h-40 justify-center text-center max-mdLap:flex-col'>
        <div className='h-[inherit] flex flex-col gap-4 flex-1 '>
          {/* LinkedIn Section */}
          <a className='flex-1 bg-[#202022] p-6 rounded-md space-y-2 place-items-center '
            target='_blank'
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/opeyemi-ayinde-08540823b/"
          >
            <IoLogoLinkedin className="size-10" />
          </a>
          {/* Email Section */}

          <a className='flex-1 dfAc bg-[#202022] p-6 rounded-md space-y-2'
            href="mailto:abdulqudusayinde60@gmail.com"
          >
            abdulqudusayinde60@gmail.com
          </a>
        </div>

        {/* GitHub Section */}
        <a
          className='bg-[#202022] p-6 rounded-md space-y-2 place-items-center h-[inherit] flex-1'
          target='_blank'
          rel="noopener noreferrer"
          href="https://github.com/ayindequdus22"
        ><IoLogoGithub className="text-white size-20" />
          <h1 className='text-3xl font-semibold max-mdPhone:text-2xl'>Github Profile</h1>
          <p className='text-lg max-mdPhone:text-base'>Find more of my amazing projects here</p>
        </a>


      </div>
    </section>
  )
}

export default Contact