import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import { GlobalReset } from "./Layout.styles"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalReset />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main>{children}</main>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
