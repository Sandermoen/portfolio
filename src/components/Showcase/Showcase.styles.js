import styled, { css } from "styled-components"
import Img from "gatsby-image"

const mediaCss = css`
  box-shadow: 1px 1px 30px 5px rgba(0, 0, 0, 0.3);
  transform: rotateY(-30deg) rotateX(5deg);
  /* transform-origin: left bottom; */
`

export const ShowcaseImg = styled(Img)`
  ${mediaCss}
  width: 60rem;
`

export const ShowcaseGIF = styled.img`
  ${mediaCss}
  position: absolute;
  right: 0;
  top: 5rem;
  width: 15rem;
`

export const ShowcaseContainer = styled.div`
  perspective: 2000px;
  margin-left: auto;
  position: relative;
`
