import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Nav from './nav'

const Layout = ({ isIndexPg, pageTitle, children }) => {
  
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
  
  // isIndexPg checks whether to display banner or not
  return (
    <div className='m-auto max-w-[500px] mt-4'>
      <title>{data.site.siteMetadata.title} - {pageTitle}</title>
      {isIndexPg ? <header className="w-72">
          <StaticImage alt="Info Base" src="../images/heading.svg"/>
          <p className='mt-2 text-center text-slate-600'>A site to collect my information and sometimes share it</p>
      </header> : ''}
      {console.log(isIndexPg)}
      <Nav />
      <main>
        <h1 className='text-teal-700 text-2xl mb-3 font-light'>{'>'}{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout