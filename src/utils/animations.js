import { keyframes } from "styled-components"

export const slideInLeft = keyframes`
from {
  transform: translateX(-30rem);
  opactiy: 0;
}

to {
  transform: translateX(0);
  opacity: 1;
}
`

export const slideInRight = keyframes`
  from {
    transform: translateX(30rem);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`
