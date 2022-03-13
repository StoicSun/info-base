import React from 'react'
import { Link } from 'gatsby'
import ThemeToggle from './themeToggle'
import { StaticImage } from 'gatsby-plugin-image'

function Nav({isIndex}) {
  return (
    <nav className='mt-6 md:mt-8 -ml-8 md:-ml-[15px] mb-8'>
        <ul className='relative flex justify-evenly md:justify-start'>
          <li className='md:pr-8 list-none'><Link to="/" className='text-sm md:text-base text-slate-700 dark:text-slate-500'>Home</Link></li>
          <li className='md:pr-8 list-none'><Link to="/dummy" className='text-sm md:text-base text-slate-700 dark:text-slate-500'>About Me</Link></li>
          <li className='md:pr-8 list-none'><Link to="/all-pages" className='text-sm md:text-base text-slate-700 dark:text-slate-500'>All Pages</Link></li>
          <li className='md:pr-8 list-none'><Link to="/tags" className='text-sm md:text-base text-slate-700 dark:text-slate-500'>Tags</Link></li>
          <li className={isIndex ? 'list-none fixed right-2 top-12 md:right-24 md:top-6' : 'list-none absolute top-[3.5rem] right-1 md:absolute md:top-[-1px] md:right-0'}><ThemeToggle /></li>
          {isIndex ? <li className='list-none fixed right-2 top-2 md:right-10 md:top-6 w-7 h-5 md:w-10 md:h-10'><a href='https://github.com/StoicSun/info-base' target="_blank" rel='noreferrer'><StaticImage src='../images/github.svg' alt='github logo'/></a></li> : ''}
        </ul>
    </nav>
  )
}

export default Nav