import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  HeroSection,
  HeroTitle,
  HeroInfo,
  HeroImage,
  HeroCallToAction,
  HeroContent,
  Emphasized,
} from "./Hero.styles"
import Context from "../../store/context"

import Container from "../Container/Container"

const Hero = () => {
  const { state } = useContext(Context)
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
    <HeroSection>
      <Container>
        <HeroContent>
          <HeroTitle isDark={state.isDark}>
            I'm <Emphasized>Sander</Emphasized>
          </HeroTitle>
          <HeroInfo isDark={state.isDark}>Front End Developer</HeroInfo>
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
