import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Context from "../../store/context"
import { HeaderContainer, HeaderContent } from "./Header.styles"

const Header = ({ siteTitle }) => {
  const { state } = useContext(Context)
  return (
    <HeaderContainer isDark={state.isDark}>
      <HeaderContent isDark={state.isDark}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </HeaderContent>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
