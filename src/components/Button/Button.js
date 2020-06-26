import React, { useContext, Fragment } from "react"

import Context from "../../store/context"

import { StyledButton } from "./Button.styles"

const Button = ({ inverted, className, children, link }) => {
  const { state } = useContext(Context)

  return (
    <Fragment>
      {link ? (
        <a href={link} target="_blank">
          <StyledButton
            className={className}
            isDark={state.isDark}
            inverted={inverted}
          >
            {children}
          </StyledButton>
        </a>
      ) : (
        <StyledButton
          className={className}
          isDark={state.isDark}
          inverted={inverted}
        >
          {children}
        </StyledButton>
      )}
    </Fragment>
  )
}

export default Button
