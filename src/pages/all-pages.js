import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

function allPages({data}) {
  return (
    <Layout showBanner={false} fixFooter={true} pageTitle={"Pages"}>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id} className='mr-12 mt-3'>
            <h3>
              <Link to={`/articles/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h3>
            <p className="text-xs text-slate-600">Posted: {node.frontmatter.date}</p>
            <p className="text-sm text-slate-600">{node.frontmatter.description}</p>
          </article>
        ))
      }
    </Layout>
  )
}

// Exporting the graphql query for getting a list of all MDX files present in the data layer
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          description
        }
        id
        slug
      }
    }
}
`

export default allPages