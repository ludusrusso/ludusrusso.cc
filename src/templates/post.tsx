import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const PostPage = ({ path, data }) => {
  const post = data.post
  return (
    <Layout>
      <div className="prose max-w-prose m-auto">
        <h1> {post.frontmatter.title} </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Layout>
  )
}

export default PostPage

export const query = graphql`
  query PostPage($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

// export const query = graphql`
//   query PostPage {
//     markdownRemark {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
