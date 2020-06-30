import React from "react"

import {
  ShowcaseImg,
  ShowcaseVideo,
  ShowcaseContainer,
} from "./Showcase.styles"

const Showcase = ({ media, video }) => (
  <ShowcaseContainer>
    <ShowcaseImg fadeIn={false} fluid={media} alt="Project" />
    <ShowcaseVideo src={video} autoPlay muted />
  </ShowcaseContainer>
)

export default Showcase
