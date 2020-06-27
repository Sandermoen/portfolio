import { createGlobalStyle } from "styled-components"

export const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
    
    /* Transition for theme toggle */
    transition: 200ms ease-out;
    transition-property: background-color, color, box-shadow;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    background-color: ${props => props.theme.background1};
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    overflow-y: auto;
    overflow-x: hidden;
    /* Account for fixed header */
    margin-top: 10rem;
  }
`
