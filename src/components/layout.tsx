import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Footer } from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <div className="mt-4">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
