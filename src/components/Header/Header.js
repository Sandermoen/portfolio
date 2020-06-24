import React, { useContext } from "react"
import PropTypes from "prop-types"

import Context from "../../store/context"
import { HeaderContainer, HeaderLogo } from "./Header.styles"

import Container from "../Container/Container"
import ThemeToggler from "../ThemeToggler/ThemeToggler"

const Header = ({ siteTitle }) => {
  const { state } = useContext(Context)
  return (
    <HeaderContainer isDark={state.isDark}>
      <Container>
        <h1>
          <HeaderLogo href="/#hero-section" to="/">
            {siteTitle}
          </HeaderLogo>
        </h1>
        <ThemeToggler />
        {/* <nav>
          <ul></ul>
        </nav> */}
      </Container>
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