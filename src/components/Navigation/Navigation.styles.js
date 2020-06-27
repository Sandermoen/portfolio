import styled from "styled-components"

export const NavigationNav = styled.nav`
  margin: 0 5em;
`

export const NavigationContainer = styled.ul`
  color: ${props => props.theme.accent1};
  list-style-type: none;

  & > :not(:last-child) {
    margin-right: 4rem;
  }
`

export const NavigationLink = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;

  &:visited {
    color: currentColor;
  }

  ${props =>
    props.active &&
    `border-bottom: 2px solid ${props => props.theme.primaryColor}`}

  padding-bottom: 5px;
`
