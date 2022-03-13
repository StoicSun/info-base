import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPost = ({data}) => {
  return (
    <Layout showBanner={false} fixFooter={false} pageTitle={data.mdx.frontmatter.title}>
      <div className='flex flex-row items-center'>
        <p className='text-sm text-gray-600 dark:text-gray-500 mr-auto'>{data.mdx.frontmatter.date}</p>
        {data.mdx.frontmatter.tags.map(tag=> 
          (<div className='tag-container text-xs ml-2 px-1 bg-gray-50 rounded-md dark:bg-teal-800 drop-shadow dark:drop-shadow-none hover:drop-shadow-lg dark:hover:shadow dark:hover:shadow-teal-600'>
            <Link to={`../../pages/tags/${tag}`}>{tag}</Link>
          </div>
          ))}
      </div>
      <div className='mdx mt-4 flex flex-col flex-nowrap gap-y-3 text-gray-700 dark:text-[#caced9]'>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
      }
      body
    }
  }
`

export default BlogPost