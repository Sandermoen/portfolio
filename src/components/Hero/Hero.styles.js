import styled, { css } from "styled-components"
import Img from "gatsby-image"
import Button from "../../components/Button/Button"

import { slideInLeft, slideInRight } from "../../utils/animations"

const animation = (animation, delay) => {
  return css`
    animation: ${animation} 1s cubic-bezier(0.31, 0.17, 0.28, 0.96) ${delay}ms;
  `
}

export const HeroSection = styled.section`
  height: 75vh;
`

export const HeroTitle = styled.h1`
  font-size: 8rem;
  color: ${props =>
    props.isDark ? props.theme.dark.accent1 : props.theme.light.accent1};
  ${animation(slideInLeft, 200)};
  opacity: 0;
  animation-fill-mode: both;
`

export const HeroInfo = styled.h3`
  font-size: 2.5rem;
  color: ${props =>
    props.isDark ? props.theme.dark.accent2 : props.theme.light.accent2};
  font-weight: 400;
  opacity: 0;
  ${animation(slideInLeft, 300)};
  animation-fill-mode: both;
`
export const HeroContent = styled.article`
  & > *:last-child {
    margin-top: 5rem;
  }
`

export const HeroImage = styled(Img)`
  flex-basis: 70rem;
  margin-left: auto;
  ${animation(slideInRight, 500)};
  animation-fill-mode: both;
  align-self: flex-end;
`

export const HeroCallToAction = styled(Button)`
  opacity: 0;
  ${animation(slideInLeft, 500)};
  animation-fill-mode: both;
`

export const Emphasized = styled.span`
  color: ${props => props.theme.primaryColor};
`
