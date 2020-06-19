import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderContainer = styled.header`
  background-color: ${props =>
    props.isDark ? props.theme.dark.background : props.theme.light.background};
  padding: 1rem 0;
  border-top: 5px solid #feb633;
`

export const HeaderLogo = styled(Link)`
  color: ${props => props.theme.primaryColor};
  font-size: 6rem;
  text-decoration: none;
`
