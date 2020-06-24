import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${props =>
    props.isDark
      ? props.theme.dark.background1
      : props.theme.light.background1};
  border-top: 5px solid #feb633;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
`

export const HeaderLogo = styled.a`
  color: ${props => props.theme.primaryColor};
  font-size: 6rem;
  text-decoration: none;
`
