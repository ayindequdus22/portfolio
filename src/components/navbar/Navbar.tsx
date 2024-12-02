import React from 'react'

const Navbar = () => {
    const links:string[] = [
        "Home","About","Skills","Projects",
        ]
  return (
<>
<nav className="df-jsb-ac px-[4%] py-2 bg-white fixed w-full">
    <a href="">An-teqs</a>
    <div className="dfAc gap-8">
        {links.map(links => (
            <a href={"#" + links.toLowerCase()} className='font-montserrat text-xl text-primary
            '>{links}</a>
        ))}
    </div>
    <a href="" className='border-primary border font-montserrat text-base px-8 py-3 text-primary rounded-md bg-white hover:bg-primary hover:text-white ease-linear duration-300'>Contact Me</a>
</nav>
</>  )
}

export default Navbar