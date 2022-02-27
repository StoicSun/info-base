// Step 1: Import React
import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

// Step 2: Define your component
const IndexPage = ({data}) => {
  return (
    <Layout pageTitle={"Pages"}>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2 className="text-2xl mt-6">{node.frontmatter.title}</h2>
            <p className="text-sm">Posted: {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
      <StaticImage
        alt="pengu"
        src="../images/pengu.png"
      />
    </Layout>
)
}

// Exporting the graphql query for getting a list of all files present in the data layer
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
        }
        id
        body
      }
    }
}
`

// Step 3: Export your component
export default IndexPage