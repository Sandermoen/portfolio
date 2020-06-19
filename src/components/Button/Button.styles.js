import styled from "styled-components"

export const StyledButton = styled.button`
  padding: 2rem 6rem;
  color: ${props =>
    props.isDark ? props.theme.dark.accent1 : props.theme.light.accent1};
  background-color: ${props => props.theme.primaryColor};
  font-family: inherit;
  border: 2px solid transparent;
  border-radius: 5px;
  font-weight: 700;
  font-size: 2rem;
  cursor: pointer;
  transform: scale(1);
  transition: 300ms;
  transition-property: background-color, transform;

  &:hover {
    color: ${props => props.theme.primaryColor};
    background: transparent;
    border: 2px solid ${props => props.theme.primaryColor};
  }

  &:focus {
    outline: none;
    transform: scale(1.05);
  }
`
