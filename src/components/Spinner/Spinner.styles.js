import styled, { keyframes } from "styled-components"
import Spinner from "../svg/../spinner.svg"

const dash = keyframes`
  to {
    stroke-dashoffset: 1000;
  }
`

export const AnimatedSpinner = styled(Spinner)`
  stroke-dasharray: 100;
  animation: ${dash} 5s infinite;
`
