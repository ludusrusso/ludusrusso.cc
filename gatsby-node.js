const dateformat = require("dateformat")
const slugify = require("slugify")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    let { date, path, slug, title } = node.frontmatter
    if (!path) {
      if (!slug) {
        slug = slugify(title)
      }
      dateString = dateformat(date, "yyyy/mm")
      path = `/blog/${dateString}/${slug}`
    }
    createNodeField({
      name: "path",
      node,
      value: path,
    })
  }
}

// exports.createPages = async ({ actions, graphql }) => {
//   const { data } = graphql(`
//     query TagQuery {
//       allMdx {
//         tags: distinct(field: frontmatter___tag)
//       }
//     }
//   `)

//   actions.createPage({
//     path: 'tags',
//     component: 
//   })

// }
