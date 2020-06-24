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
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    background-color: ${props =>
      props.isDark
        ? props.theme.dark.background1
        : props.theme.light.background1};
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
