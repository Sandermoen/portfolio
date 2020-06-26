import styled, { css } from "styled-components"

const scrolledStyling = css`
  background-color: ${props =>
    props.isDark
      ? props.theme.dark.background2
      : props.theme.light.background2};
  box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.2);
`

export const HeaderContainer = styled.header`
  background-color: ${props =>
    props.isDark
      ? props.theme.dark.background1
      : props.theme.light.background1};
  ${props => props.scrolledStyling && scrolledStyling};
  transition: 200ms ease-out;
  transition-property: background-color, box-shadow;
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

export const HeaderContent = styled.div`
  margin-left: auto;
  display: flex;
`
