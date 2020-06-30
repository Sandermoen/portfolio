import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  HeroSection,
  HeroTitle,
  HeroInfo,
  HeroImage,
  HeroCallToAction,
  HeroContent,
} from "./Hero.styles"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import Container from "../Container/Container"

const Hero = () => {
  const { isDark } = useContext(ThemeManagerContext)
  const data = useStaticQuery(graphql`
    query HeroImageQuery {
      file(relativePath: { eq: "person.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeroSection id="hero-section">
      <Container section="Home">
        <HeroContent>
          <HeroTitle isDark={isDark}>I’m Sander</HeroTitle>
          <HeroInfo isDark={isDark}>Front End Developer</HeroInfo>
          <HeroCallToAction>Contact Me</HeroCallToAction>
        </HeroContent>
        <HeroImage
          fadeIn={false}
          fluid={data.file.childImageSharp.fluid}
          alt="Sander"
        />
      </Container>
    </HeroSection>
  )
}

export default Hero
