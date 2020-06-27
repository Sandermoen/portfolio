import styled from "styled-components"

export const ThemeTogglerButton = styled.button`
  width: 5rem;
  height: 2.5rem;
  border-radius: 50px;
  border: none;
  background-color: ${props => props.theme.accent1};
  font-size: 1.5rem;
  position: relative;
  cursor: pointer;

  &:focus {
    outline: none;
    &:before {
    }
  }

  &:before {
    content: "";
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 100px;
    background-color: ${props => props.theme.background1};
    left: ${props => (props.theme.isDark ? "2px" : "calc(100% - 2rem - 2px)")};
    top: 50%;
    transform: translateY(-50%) scale(1.3);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
    padding: 1rem;
    transition: left 500ms ease-out;
    z-index: 10;
  }

  & > span {
    position: absolute;
    ${props => (props.theme.isDark ? "right: 5px;" : "left: 5px;")}
    top: 50%;
    transform: translateY(-50%);
  }
`
