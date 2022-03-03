import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Nav from './nav'

// showBanner, fixFooter are boolean parameters for deciding whether show logo and to fix the banner at the bottom or not resp
const Layout = ({ showBanner, fixFooter, pageTitle, children }) => {
  
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
    <div className='mx-4 md:m-auto max-w-[500px] mt-4'>
      <title>{data.site.siteMetadata.title} - {pageTitle}</title>
      {showBanner ? <header className="w-72">
          <StaticImage alt="Info Base" src="../images/heading.svg"/>
          <p className='mt-2 text-center text-slate-600'>A site to collect my information and sometimes share it</p>
      </header> : ''}
      <Nav />
      <main>
        <h1 className='text-teal-700 text-2xl mb-3 font-light'>{'>'}{pageTitle}</h1>
        {children}
      </main>
      <footer className={fixFooter ? 'w-[17.5rem] py-6 bg-white fixed bottom-0' : 'w-[17rem] pt-24 pb-4 bg-white bottom-0'}>
        <p className='block text-center text-gray-600 text-sm'>©Suraj Das</p>
      </footer>
    </div>
  )
}

export default Layout