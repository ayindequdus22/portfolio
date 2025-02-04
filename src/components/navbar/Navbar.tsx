import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = (): React.JSX.Element => {
  const [show,setShow] = useState(false)
  const location = useLocation();

  useEffect(() => {
    
    setShow(false);
  }, [location]);
  useEffect(()=>{
window.addEventListener("scroll",()=>setShow(false));
return ()=> window.removeEventListener("scroll",()=>setShow(false));
  })
    return (
        <>
            <nav className="df-jsb-ac px-[4%] py-6 bg-[rgb(10,10,10)] fixed w-full shadow-md">
                <Link to="">An-teqs</Link>
                <div className={`dfAc gap-8 max-tab:df-fldc-ac max-tab:absolute right-0  max-tab:w-full transition-all duration-300 ease-in-out max-tab:pt-2 max-tab:pb-4 ${show ? "max-tab:top-16": "max-tab:top-[-150rem]"} `}>
                    <Link className='font-montserrat text-xl text-primary' to={"/"}>Home</Link>
                    <Link className='font-montserrat text-xl text-primary' to={"/about"}>About</Link>
                    <a className='font-montserrat text-xl text-primary' href={"/#skills"}>Skills</a>
                    <Link className='font-montserrat text-xl text-primary' to={"/projects"}>Projects</Link>
                </div>
                <div>
                 <Link to="/contact-me" className=' text-base px-8 py-3 btn  max-tab:text-sm  max-tab:px-5'>Contact Me</Link>
                <button className='hidden max-tab:inline pl-4' onClick={()=>setShow(!show)}>
                    <FontAwesomeIcon icon={!show ? faBars:faTimes} className='text-2xl'/>
                </button>   
                </div>
                
            </nav>
        </>)
}

export default Navbar