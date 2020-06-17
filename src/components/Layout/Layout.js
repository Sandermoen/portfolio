import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Context from "../../store/context"

import { GlobalReset } from "./Layout.styles"
import Header from "../Header/Header"

const Layout = ({ children }) => {
  const { state } = useContext(Context)
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
      <GlobalReset isDark={state.isDark} />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
