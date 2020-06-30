import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import { ProjectsSection, ProjectsContent } from "./Projects.styles"

import SectionHeader from "../SectionHeader/SectionHeader"
import Container from "../Container/Container"
import Project from "../Project/Project"

const Projects = () => {
  const data = useStaticQuery(graphql`
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
            mobileVideo {
              publicURL
            }
            title
            url
            githubUrl
          }
        }
      }
    }
  `)
  const { isDark } = useContext(ThemeManagerContext)

  return (
    <ProjectsSection id="projects-section" isDark={isDark}>
      <Container section="Projects">
        <ProjectsContent>
          <SectionHeader isDark={isDark}>Personal Projects</SectionHeader>
          {data.allProjectsJson.edges.map(project => (
            <Project key={project.node.title} project={project.node} />
          ))}
        </ProjectsContent>
      </Container>
    </ProjectsSection>
  )
}

export default Projects
