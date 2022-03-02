import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPost = ({data}) => {
  return (
    <Layout isIndexPg={false} pageTitle={data.mdx.frontmatter.title}>
      <p className='text-sm text-gray-600'>{data.mdx.frontmatter.date}</p>
      <div className='mt-4 flex flex-col flex-nowrap gap-y-3'>
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
      }
      body
    }
  }
`

export default BlogPost