import React from 'react'

const Navbar = ():React.JSX.Element => {
    const links:string[] = [
        "Home","About","Skills","Projects",
        ]
  return (
<>
<nav className="df-jsb-ac px-[4%] py-2 bg-white fixed w-full">
    <a href="">An-teqs</a>
    <div className="dfAc gap-8 max-tab:hidden">
        {links.map(links => (
            <a href={"#" + links.toLowerCase()} className='font-montserrat text-xl text-primary
            ' key={links.length}>{links}</a>
        ))}
    </div>
    <a href="" className=' text-base px-8 py-3 btn'>Contact Me</a>
</nav>
</>  )
}

export default Navbar