import React, { useReducer } from "react"
import PropTypes from "prop-types"
import ActiveSectionContext from "./activeSectionContext"

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_SECTION": {
      return action.payload || "Home"
    }
    default: {
      return state
    }
  }
}

const ActiveSectionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, "Home")
  return (
    <ActiveSectionContext.Provider value={{ state, dispatch }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

ActiveSectionProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ActiveSectionProvider
