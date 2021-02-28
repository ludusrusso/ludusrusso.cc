import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import { Helmet } from "react-helmet"

interface SEOProps {
  description: string
  lang: string
  meta: any[]
  title: string
  image: string
}

const SEO: FC<SEOProps> = ({
  title,
  image = "/profile.jpg",
  description = "",
  lang = "it",
  meta = [],
}) => {
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const url = site.siteMetadata.siteUrl
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  if (!image.startsWith("http")) {
    image = `${url}/${image}`
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: image,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
