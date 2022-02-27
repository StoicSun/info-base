import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  
  // Graphql queries are diff in building block components and pages
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  
  return (
    <div className='m-auto max-w-[500px]'>
      <title>Suraj | {data.site.siteMetadata.title}</title>
      <header className='text-slate-700 text-3xl'>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className='flex pl-0'>
          <li className='pr-8 underline list-none'><Link to="/">Home</Link></li>
          <li className='pr-8 underline list-none'><Link to="/dummy">Dummy</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className='text-teal-700 text-xl'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout