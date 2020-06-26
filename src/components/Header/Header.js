import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import throttle from "lodash/throttle"

import Context from "../../store/context"
import { HeaderContainer, HeaderLogo, HeaderContent } from "./Header.styles"

import Container from "../Container/Container"
import ThemeToggler from "../ThemeToggler/ThemeToggler"
import Navigation from "../Navigation/Navigation"

const Header = ({ siteTitle }) => {
  const { state } = useContext(Context)
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
    <HeaderContainer isDark={state.isDark} scrolledStyling={scrolledStyling}>
      <Container>
        <h1>
          <HeaderLogo href="/#hero-section" to="/">
            {siteTitle}
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
