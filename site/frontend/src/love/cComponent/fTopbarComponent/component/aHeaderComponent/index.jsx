import React, { useRef } from 'react'

const HeaderComponent = ({ Redux, children }) => {
  return (
    <React.Fragment>
      <img src={Redux.state.ReceivedObject?.Retrieve?.coverImage?.url} alt="Cover" />
      { children }
    </React.Fragment>
  )
}

export default HeaderComponent