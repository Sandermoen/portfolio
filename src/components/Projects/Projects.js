import React, { useContext } from "react"

import Context from "../../store/context"

import { ProjectsSection, ProjectsContent } from "./Projects.styles"

import SectionHeader from "../SectionHeader/SectionHeader"
import Container from "../Container/Container"

const Projects = () => {
  const { state } = useContext(Context)

  return (
    <ProjectsSection id="projects-section" isDark={state.isDark}>
      <Container>
        <ProjectsContent>
          <SectionHeader isDark={state.isDark}>Personal Projects</SectionHeader>
        </ProjectsContent>
      </Container>
    </ProjectsSection>
  )
}

export default Projects
