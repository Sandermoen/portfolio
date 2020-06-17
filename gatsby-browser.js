import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStateProvider from "./src/store/GlobalStateProvider"
import Theme from "./src/themes/theme"

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>
    <ThemeProvider theme={Theme}>{element}</ThemeProvider>
  </GlobalStateProvider>
)
