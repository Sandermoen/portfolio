import React from "react"

import { StyledSectionHeader } from "./SectionHeader.styles"

const SectionHeader = ({ isDark, children }) => (
  <StyledSectionHeader isDark={isDark}>{children}</StyledSectionHeader>
)

export default SectionHeader
