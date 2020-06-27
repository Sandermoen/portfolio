import React, { Fragment, useContext } from "react"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import { GlobalReset } from "./Layout.styles"
import Header from "../Header/Header"

const Layout = ({ children }) => {
  const { isDark } = useContext(ThemeManagerContext)
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
    <Fragment>
      <GlobalReset isDark={isDark} />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
