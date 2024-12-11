import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/jobs'>Jobs</NavLink></li>
    <li><NavLink to='/applied'>Applied jobs</NavLink></li>
    <li><NavLink to='/statistics'>Statistics</NavLink></li>
    <li><NavLink to='/blogs'>Blogs</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100 lg:px-20 md:px-12 sm:px-8 max-sm:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu gap-3 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to='/' className="lg:text-3xl md:text-[25px] sm:text-[22px] max-sm:text-[22px] font-bold no-underline">CareerHub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="bg-gradient-to-r from-sky-500 to-purple-500 lg:px-3 lg:py-2 md:px-3 md:py-2 sm:px-2 sm:py-2 max-sm:px-2 max-sm:py-[5px] rounded-md text-white font-semibold lg:text-[16px] md:text-[16px] sm:text-[14px] max-sm:text-[14px]">Start applying</Link>
      </div>
    </div>
  )
}

export default Header