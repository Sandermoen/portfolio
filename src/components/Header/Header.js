import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import throttle from "lodash/throttle"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import { HeaderContainer, HeaderLogo, HeaderContent } from "./Header.styles"

import Container from "../Container/Container"
import ThemeToggler from "../ThemeToggler/ThemeToggler"
import Navigation from "../Navigation/Navigation"

const Header = () => {
  const { isDark } = useContext(ThemeManagerContext)
  const [scrolledStyling, setScrolledStyling] = useState(false)

  useEffect(() => {
    const scrollListener = window.addEventListener(
      "scroll",
      throttle(() => {
        if (window.pageYOffset > 0) {
          setScrolledStyling(true)
        } else {
          if (setScrolledStyling) {
            setScrolledStyling(false)
          }
        }
      }, 300)
    )

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [setScrolledStyling])

  return (
    <HeaderContainer isDark={isDark} scrolledStyling={scrolledStyling}>
      <Container>
        <h1>
          <HeaderLogo href="/#hero-section" to="/">
            S
          </HeaderLogo>
        </h1>
        <HeaderContent>
          {/* <Navigation /> */}
          <ThemeToggler />
        </HeaderContent>
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
