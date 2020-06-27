import styled from "styled-components"

export const StyledSectionHeader = styled.h2`
  color: ${props => props.theme.accent1};
  font-size: 5rem;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    display: inline-block;
    height: 5px;
    background-color: ${props => props.theme.primaryColor};
    width: 10rem;
  }
`
