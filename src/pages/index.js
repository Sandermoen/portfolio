import React from "react"

import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects/Projects"
import SEO from "../components/SEO/SEO"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Projects />
    </Layout>
  )
}

export default IndexPage
