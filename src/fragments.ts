import { graphql } from "gatsby"

export const cloudinaryAssetFluid = graphql`
  fragment CloudinaryAssetFluid on CloudinaryAssetFluid {
    aspectRatio
    base64
    sizes
    src
    srcSet
  }
`

export const cloudinaryAssetFluidLimitPresentationSize = graphql`
  fragment CloudinaryAssetFluidLimitPresentationSize on CloudinaryAssetFluid {
    maxHeight: presentationHeight
    maxWidth: presentationWidth
  }
`

export const postPreview = graphql`
  fragment PostPreview on MarkdownRemark {
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
            fixed(width: 100) {
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
`

export const cloudinaryAssetFixed = graphql`
  fragment CloudinaryAssetFixed on CloudinaryAssetFixed {
    base64
    height
    src
    srcSet
    width
  }
`
