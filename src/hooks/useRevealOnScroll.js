import { useState, useEffect, useRef } from "react"

const useRevealOnScroll = () => {
  const [reveal, setReveal] = useState(false)
  const elementRef = useRef()

  function handler(changes) {
    changes.forEach(change => {
      if (change.isIntersecting) {
        setReveal(true)
      }
    })
  }

  useEffect(() => {
    let observer = null
    if (elementRef.current) {
      observer = new IntersectionObserver(handler, {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      })
      observer.observe(elementRef.current)
    }
  }, [elementRef])

  return { reveal, elementRef }
}

export default useRevealOnScroll
