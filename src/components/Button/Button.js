import React, { useContext, Fragment } from "react"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import { StyledButton } from "./Button.styles"

const Button = ({ inverted, className, children, link }) => {
  const { isDark } = useContext(ThemeManagerContext)

  return (
    <Fragment>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <StyledButton
            className={className}
            isDark={isDark}
            inverted={inverted}
          >
            {children}
          </StyledButton>
        </a>
      ) : (
        <StyledButton className={className} isDark={isDark} inverted={inverted}>
          {children}
        </StyledButton>
      )}
    </Fragment>
  )
}

export default Button
