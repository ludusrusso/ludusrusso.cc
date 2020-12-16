import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { BlogPostPreview } from "../components/post-preview"

const TestPage: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Layout>
      <div className="max-w-4xl m-auto">
        <ul className="grid grid-cols-2 gap-2">
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
    allMarkdownRemark {
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
