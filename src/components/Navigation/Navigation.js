import React, { useContext } from "react"

import ActiveSectionContext from "../../context/activeSectionContext"

import {
  NavigationNav,
  NavigationContainer,
  NavigationLink,
} from "./Navigation.styles"

const Navigation = () => {
  const { state: activeSection } = useContext(ActiveSectionContext)
  return (
    <NavigationNav>
      <NavigationContainer>
        <NavigationLink href="/#hero-section" activeSection={activeSection}>
          Home
        </NavigationLink>
        <NavigationLink href="/#projects-section" activeSection={activeSection}>
          Projects
        </NavigationLink>
        <NavigationLink activeSection={activeSection}>About Me</NavigationLink>
        <NavigationLink activeSection={activeSection}>
          Get In Touch
        </NavigationLink>
      </NavigationContainer>
    </NavigationNav>
  )
}

export default Navigation
