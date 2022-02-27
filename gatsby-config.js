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
    ],
    pathPrefix: "/info-base"
}