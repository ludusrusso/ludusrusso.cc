const remarkMath = require(`remark-math`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `ludusrusso`,
    description: `Il mio blog personale sulla programmazione e il making.`,
    author: `@ludusrusso`,
    siteUrl: process.env.SITE_URL || "https://preview.ludusrusso.space",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        remarkPlugins: [remarkMath],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/profile.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
  ],
  mapping: {
    "Mdx.frontmatter.author": `AuthorYaml`,
  },
}
