import React, { useContext } from "react"

import Context from "../store/context"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const IndexPage = () => {
  const { dispatch } = useContext(Context)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <button
        onClick={event => {
          event.preventDefault()
          dispatch({ type: "TOGGLE_DARK_MODE" })
        }}
      >
        Toggle dark mode
      </button>
    </Layout>
  )
}

export default IndexPage
