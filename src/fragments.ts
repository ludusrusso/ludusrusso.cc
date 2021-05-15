import { graphql } from "gatsby"

export const postPreview = graphql`
  fragment PostPreview on Mdx {
    id
    timeToRead
    frontmatter {
      lang
      path
      title
      author {
        id
        name
        profile {
          childImageSharp {
            gatsbyImageData(width: 100)
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
`
