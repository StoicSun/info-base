// Step 1: Import React
import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

// Step 2: Define your component
const IndexPage = ({data}) => {
  return (
    <Layout showBanner={true} fixFooter={true} pageTitle={"Recent Pages"}>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id} className='mr-12 mt-3'>
            <h2>
              <Link to={`/articles/${node.slug}`} className='text-slate-500 hover:text-slate-800'>
                {node.frontmatter.title}
              </Link>
            </h2>
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
    allMdx(
      limit: 4
      sort: {fields: frontmatter___date, order: DESC}
      ) {
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

// Step 3: Export your component
export default IndexPage