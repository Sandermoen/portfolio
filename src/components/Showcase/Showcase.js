import React from "react"

import { ShowcaseImg, ShowcaseGIF, ShowcaseContainer } from "./Showcase.styles"

const Showcase = ({ media, gif }) => (
  <ShowcaseContainer>
    <ShowcaseImg fadeIn={false} fluid={media} alt="Project" />
    <ShowcaseGIF src={gif} />
  </ShowcaseContainer>
)

export default Showcase
