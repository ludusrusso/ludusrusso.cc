import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { BlogPostPreview } from "../components/post-preview"
import SEO from "../components/seo"
import { TestPageQuery } from "../graphqlTypes"

const IndexPage: React.FC<{ data: TestPageQuery }> = ({ data }) => {
  return (
    <Layout>
      <SEO />
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

export default IndexPage

export const query = graphql`
  query TestPage {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        timeToRead
        frontmatter {
          path
          title
          author {
            id
            name
            profile {
              childCloudinaryAsset {
                fixed(width: 50) {
                  ...CloudinaryAssetFixed
                }
              }
            }
          }
          description
          date(locale: "it", formatString: "DD/MM/yyyy")
          image {
            childCloudinaryAsset {
              fluid(maxWidth: 500) {
                ...CloudinaryAssetFluid
              }
            }
          }
        }
      }
    }
  }
`
