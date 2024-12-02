import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (): React.JSX.Element => {
  
    return (
        <>
            <nav className="df-jsb-ac px-[4%] py-2 bg-white fixed w-full shadow-md">
                <Link to="">An-teqs</Link>
                <div className="dfAc gap-8 max-tab:hidden">
                    <Link className='font-montserrat text-xl text-primary' to={"/"}>Home</Link>
                    <Link className='font-montserrat text-xl text-primary' to={"about"}>About</Link>
                    <Link className='font-montserrat text-xl text-primary' to={""}>Skills</Link>
                    <Link className='font-montserrat text-xl text-primary' to={"projects"}>Projects</Link>
                </div>
                <a href="" className=' text-base px-8 py-3 btn'>Contact Me</a>
            </nav>
        </>)
}

export default Navbar