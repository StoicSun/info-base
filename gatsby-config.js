module.exports = {
    siteMetadata: {
        siteUrl: `https://stoicsun.github.io/info-base/`,
        title: "infoBase"
    },
    plugins: [
        `gatsby-plugin-postcss`,
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `posts`,
              path: `${__dirname}/posts`,
            }
          },
          {
            resolve: `gatsby-plugin-mdx`,
            options: {
              gatsbyRemarkPlugins: [
                {
                  resolve: `gatsby-remark-prismjs`,
                  options: {
                    classPrefix: "language-",
                    aliases: {},
                    showLineNumbers: false,
                    noInlineHighlight: false,
                  },
                },
              ],
            },
          },
    ],
    pathPrefix: "/info-base"
}