import React from "react"

import mobileGIF from "../../GIFs/instaclone-mobile.gif"

import { ShowcaseImg, ShowcaseGIF, ShowcaseContainer } from "./Showcase.styles"

const Showcase = ({ media }) => (
  <ShowcaseContainer>
    <ShowcaseImg fadeIn={false} fluid={media} alt="Project" />
    <ShowcaseGIF src={mobileGIF} />
  </ShowcaseContainer>
)

export default Showcase
