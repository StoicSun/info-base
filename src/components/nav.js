import React from 'react'
import { Link } from 'gatsby'

function Nav() {
  return (
    <nav className='mt-6 mb-8'>
        <ul className='flex pl-0'>
          <li className='pr-8 list-none'><Link to="/" className='text-sm md:text-base text-slate-700'>Home</Link></li>
          <li className='pr-8 list-none'><Link to="/dummy" className='text-sm md:text-base text-slate-700'>About Me</Link></li>
          <li className='pr-8 list-none'><Link to="/all-pages" className='text-sm md:text-base text-slate-700'>All Pages</Link></li>
        </ul>
    </nav>
  )
}

export default Nav