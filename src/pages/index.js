import React from "react"

import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/SEO/SEO"
// import Spinner from "../components/Spinner/Spinner"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
