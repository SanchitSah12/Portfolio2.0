import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const allPages= [
    { name: 'About Me', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
  ]
  return (

    <nav>
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {allPages.map((page) => {
                return <li><Link to={page.href}>{page.name}</Link></li>
              })}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl font-display">Sanchit Sah</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#ffd700]">
            {
              allPages.map((page) => {
                return <li><Link to={page.href}>{page.name}</Link></li>
              })
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a href='https://drive.google.com/file/d/1-210UB9jb-g7aooPQMtLLm_C798OcBCE/view?usp=sharing' className="btn">Get My Resume</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar