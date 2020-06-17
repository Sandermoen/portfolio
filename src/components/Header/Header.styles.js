import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${props =>
    props.isDark
      ? props.theme.dark.backgroundSecondary
      : props.theme.light.backgroundSecondary};
  padding: 3rem 0;
`

export const HeaderContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
