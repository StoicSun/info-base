const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const tagTemplate = path.resolve("src/templates/tags.js")

    const result = await graphql(`
    {
        tagsGroup: allMdx(limit: 2000) {
          edges {
            node {
              frontmatter {
                tags
              }
              slug
            }
          }
        }
      }
  `)

    // handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // somewhere before this I'm fetching allMdx posts, so here I'm reusing the `edges` collection
    const tags = {}

    result.data.tagsGroup.edges.filter(({ node }) => node.frontmatter.tags).forEach(({ node }) => {

        const tagsList = node.frontmatter.tags

        tagsList.forEach(tag => {
            if (!tags[tag]) {
                tags[tag] = []
            }
            tags[tag].push(node.slug)
        })
    })

    Object.keys(tags).forEach(tag => {
        createPage({
            path: `/pages/tags/${tag}`,
            component: tagTemplate,
            context: {
                tag,
                slugs: tags[tag]
            },
        })
    })
}