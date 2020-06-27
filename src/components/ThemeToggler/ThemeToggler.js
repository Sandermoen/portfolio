import React, { useContext, Fragment } from "react"
import storage from "local-storage-fallback"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import { ThemeTogglerButton } from "./ThemeToggler.styles"

const ThemeToggler = () => {
  const { isDark, toggleDark } = useContext(ThemeManagerContext)

  return (
    <Fragment>
      <ThemeTogglerButton
        onClick={event => {
          event.preventDefault()
          toggleDark()
          storage.setItem("dark", isDark ? "LIGHT" : "DARK")
        }}
        isDark={isDark}
      >
        <span role="img" aria-label="Theme emoji">
          {isDark ? "🌞" : "🌜"}
        </span>
      </ThemeTogglerButton>
    </Fragment>
  )
}

export default ThemeToggler
