import styled from "@emotion/styled"
import { MDXProvider, MDXProviderProps } from "@mdx-js/react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PostPageQuery } from "../graphqlTypes"

const CodeCnt = styled.div``

const Code = ({ children, className }) => {
  const language = className?.replace(/language-/, "") ?? ""

  return (
    <CodeCnt>
      <Highlight
        {...defaultProps}
        theme={theme as any}
        code={children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <CodeWrapper className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </CodeWrapper>
        )}
      </Highlight>
    </CodeCnt>
  )
}

export const CodeWrapper = styled.div`
  background-color: red;
  text-align: left;
  padding: 0.5em;
  overflow: scroll;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`

const Pre = styled.pre`
  background-color: transparent !important;
  padding: 0 !important;
`

const components: MDXProviderProps["components"] = {
  code: Code,
  pre: Pre,
}

export default ({ data }: { data: PostPageQuery }) => {
  const post = data.post
  const { date, title, description, image } = post.frontmatter

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={image?.childImageSharp?.resize?.src}
      />

      <article className="prose lg:prose-lg m-auto mt-16">
        <h1>{post.frontmatter.title}</h1>
        <p className="font-semibold text-gray-500 mt-4 mb-10">
          Ludovico Russo &bull; {date} &bull; read in {post.timeToRead} mins
        </p>
        <div className="text-gray-800">
          <MDXProvider components={components}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </article>
    </Layout>
  )
}
export const query = graphql`
  query PostPage($id: String!) {
    post: mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(fromNow: false, formatString: "Do MMMM, yyyy")
        description
        image {
          childImageSharp {
            resize(width: 600) {
              src
            }
          }
        }
      }
      timeToRead
      body
    }
  }
`
