import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"

const PostPage = ({ data }) => {
  const post = data.post
  const components = {}

  return (
    <Layout>
      <div className="prose max-w-prose m-auto">
        <h1> {post.frontmatter.title} </h1>
        <MDXProvider component={components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export default PostPage

export const query = graphql`
  query PostPage($pagePath: String!) {
    post: mdx(frontmatter: { path: { eq: $pagePath } }) {
      frontmatter {
        title
      }
      body
    }
  }
`
