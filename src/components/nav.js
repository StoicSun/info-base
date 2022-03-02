import React from 'react'
import { Link } from 'gatsby'

function Nav() {
  return (
    <nav className='mt-6 mb-8'>
        <ul className='flex pl-0'>
          <li className='pr-8 list-none'><Link to="/" className='text-slate-700'>Home</Link></li>
          <li className='pr-8 list-none'><Link to="/dummy" className='text-slate-700'>About Me</Link></li>
        </ul>
    </nav>
  )
}

export default Nav