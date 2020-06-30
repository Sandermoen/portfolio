import React, { useEffect, useContext, useRef } from "react"

import ActiveSectionContext from "../../context/activeSectionContext"

import { ContainerDiv } from "./Container.styles"

const Container = ({ children, section }) => {
  const { dispatch } = useContext(ActiveSectionContext)
  const containerRef = useRef()
  useEffect(() => {
    const element = containerRef.current
    const handler = changes => {
      changes.forEach(change => {
        if (change.isIntersecting) {
          dispatch({ type: "SET_ACTIVE_SECTION", payload: section })
        }
      })
    }

    const observer = new IntersectionObserver(handler, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    })
    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [containerRef, dispatch, section])

  return <ContainerDiv ref={containerRef}>{children}</ContainerDiv>
}

export default Container
