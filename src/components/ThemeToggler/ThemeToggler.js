import React, { useContext, Fragment } from "react"

import Context from "../../store/context"

import { ThemeTogglerButton } from "./ThemeToggler.styles"

const ThemeToggler = () => {
  const { state, dispatch } = useContext(Context)

  return (
    <Fragment>
      <ThemeTogglerButton
        onClick={event => {
          event.preventDefault()
          dispatch({ type: "TOGGLE_DARK_MODE" })
        }}
        isDark={state.isDark}
      >
        <span role="img" aria-label="Theme emoji">
          {state.isDark ? "🌞" : "🌜"}
        </span>
      </ThemeTogglerButton>
    </Fragment>
  )
}

export default ThemeToggler
