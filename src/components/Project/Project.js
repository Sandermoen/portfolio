import React, { useContext } from "react"

import {
  ProjectContainer,
  ProjectTitle,
  ProjectArticle,
  ProjectDetails,
  ProjectCallToAction,
  ButtonContainter,
} from "./Project.styles"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import Showcase from "../Showcase/Showcase"

const Project = ({ project }) => {
  const { isDark } = useContext(ThemeManagerContext)
  return (
    <ProjectContainer
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease-out-back"
      data-sal-duration="1000"
    >
      <ProjectArticle>
        <ProjectTitle>{project.title}</ProjectTitle>

        <ProjectDetails isDark={isDark}>{project.description}</ProjectDetails>

        <ButtonContainter>
          <ProjectCallToAction link={project.url}>
            Live Demo
          </ProjectCallToAction>
          <ProjectCallToAction link={project.githubUrl} inverted>
            View Repo
          </ProjectCallToAction>
        </ButtonContainter>
      </ProjectArticle>
      <Showcase
        media={project.desktopImage.childImageSharp.fluid}
        gif={project.mobileGIF.publicURL}
      />
    </ProjectContainer>
  )
}

export default Project
