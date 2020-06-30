import React from "react"
import ActiveSectionProvider from "./src/context/ActiveSectionProvider"

export const wrapRootElement = ({ element }) => (
  <ActiveSectionProvider>{element}</ActiveSectionProvider>
)
