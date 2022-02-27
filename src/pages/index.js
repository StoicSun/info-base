// Step 1: Import React
import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// Step 2: Define your component
const IndexPage = ({data}) => {
  return (
    <Layout pageTitle={"Pages"}>
      <ul className="list-disc">
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
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
    allFile {
      nodes {
        name
      }
    }
  }
`

// Step 3: Export your component
export default IndexPage