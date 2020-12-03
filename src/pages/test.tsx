import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const TestPage: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Layout>
      <h1> Questa è la pagina di test</h1>
      <ul>
        {data.allMarkdownRemark.nodes.map(post => {
          return (
            <li>
              <img
                src={post.frontmatter.image.childImageSharp.fixed.src}
                alt={post.frontmatter.title}
              />
              <a href={post.fields.slug}> {post.frontmatter.title}</a>
            </li>
          )
        })}
      </ul>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

export default TestPage

export const query = graphql`
  query TestPage {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          author
          category
          tag
          date(locale: "it", formatString: "DD/MM/yyyy")
          image {
            childImageSharp {
              fixed(width: 200) {
                src
              }
            }
          }
        }
      }
    }
  }
`
