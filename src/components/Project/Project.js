import React, { useContext } from "react"

import {
  ProjectContainer,
  ProjectTitle,
  ProjectArticle,
  ProjectDetails,
  ProjectCallToAction,
  ButtonContainter,
} from "./Project.styles"

import Context from "../../store/context"
import Showcase from "../Showcase/Showcase"

const Project = ({ project }) => {
  const { state } = useContext(Context)

  return (
    <ProjectContainer>
      <ProjectArticle>
        <ProjectTitle>{project.title}</ProjectTitle>

        <ProjectDetails isDark={state.isDark}>
          {project.description}
        </ProjectDetails>

        <ButtonContainter>
          <ProjectCallToAction link={project.url}>
            Live Demo
          </ProjectCallToAction>
          <ProjectCallToAction link={project.githubUrl} inverted>
            View Repo
          </ProjectCallToAction>
        </ButtonContainter>
      </ProjectArticle>
      <Showcase media={project.desktopImage.childImageSharp.fluid} />
    </ProjectContainer>
  )
}

export default Project
