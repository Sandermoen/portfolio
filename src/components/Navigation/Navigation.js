import React from "react"

import {
  NavigationNav,
  NavigationContainer,
  NavigationLink,
} from "./Navigation.styles"

const Navigation = () => (
  <NavigationNav>
    <NavigationContainer>
      <NavigationLink href="/#hero-section">Home</NavigationLink>
      <NavigationLink href="/#projects-section">Projects</NavigationLink>
      <NavigationLink>About Me</NavigationLink>
      <NavigationLink>Get In Touch</NavigationLink>
    </NavigationContainer>
  </NavigationNav>
)

export default Navigation
