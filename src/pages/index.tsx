import { graphql } from "gatsby"
import Layout from "../components/layout"
import { BlogPostPreview } from "../components/post-preview"
import SEO from "../components/seo"
import { TestPageQuery } from "../graphqlTypes"

const Hero = () => {
  return (
    <div>
      <h1>Hey!</h1>
      <p>Sono Ludovico, uno sviluppatore che </p>
    </div>
  )
}

const IndexPage: React.FC<{ data: TestPageQuery }> = ({ data }) => {
  return (
    <Layout>
      <SEO title="ludusrusso" />
      <Hero />
      <div className="max-w-6xl m-auto">
        <ul className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.allMdx.nodes.map(post => {
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
              childImageSharp {
                gatsbyImageData(width: 50)
              }
            }
          }
          description
          date(locale: "it", formatString: "DD/MM/yyyy")
          image {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
          }
        }
      }
    }
  }
`
