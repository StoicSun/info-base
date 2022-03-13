import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const TagsPage = ({
  data: {
    allMdx: { group }
  },
}) => (
    <Layout pageTitle="Tags" showBanner={false} fixFooter={true}>
        <ul className="m-3">
        {group.map(tag => (
            <li key={tag.fieldValue} className="pt-[2px] dark:list-none">
            <Link to={`../pages/tags/${tag.fieldValue}`}>
                {tag.fieldValue} ({tag.totalCount})
            </Link>
            </li>
        ))}
        </ul>
    </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    })
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`