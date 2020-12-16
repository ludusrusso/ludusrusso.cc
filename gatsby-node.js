const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(edge => {
    console.log(edge, edge.node.frontmatter.path)
    createPage({
      path: edge.node.frontmatter.path,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        path: edge.node.frontmatter.path,
      },
    })
  })
}
