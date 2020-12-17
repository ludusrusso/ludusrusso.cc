import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { BlogPostPreview } from "../components/post-preview"

const TestPage: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Layout>
      <div className="max-w-6xl m-auto">
        <ul className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.allMarkdownRemark.nodes.map(post => {
            return <BlogPostPreview key={post.id} post={post} />
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default TestPage

export const query = graphql`
  query TestPage {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          path
          title
          author
          description
          date(locale: "it", formatString: "DD/MM/yyyy")
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
