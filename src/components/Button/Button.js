import React, { useContext } from "react"

import Context from "../../store/context"

import { StyledButton } from "./Button.styles"

const Button = ({ inverted, className, children }) => {
  const { state } = useContext(Context)

  return (
    <StyledButton className={className} isDark={state.isDark}>
      {children}
    </StyledButton>
  )
}

export default Button
