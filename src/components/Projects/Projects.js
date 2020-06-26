import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Context from "../../store/context"

import { ProjectsSection, ProjectsContent } from "./Projects.styles"

import SectionHeader from "../SectionHeader/SectionHeader"
import Container from "../Container/Container"
import Project from "../Project/Project"

const Projects = () => {
  const {
    allProjectsJson: { edges: projects },
  } = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            description
            desktopImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            mobileGIF
            title
            url
            githubUrl
          }
        }
      }
    }
  `)
  const { state } = useContext(Context)

  return (
    <ProjectsSection id="projects-section" isDark={state.isDark}>
      <Container>
        <ProjectsContent>
          <SectionHeader isDark={state.isDark}>Personal Projects</SectionHeader>
          {projects.map(project => (
            <Project key={project.node.title} project={project.node} />
          ))}
        </ProjectsContent>
      </Container>
    </ProjectsSection>
  )
}

export default Projects
