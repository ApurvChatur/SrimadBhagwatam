import React, { useEffect, useRef } from 'react'
import HeaderComponent from '../../component/aHeaderComponent';


const ProfileDeleteComponent = ({ Redux, OnClick }) => {
  // JSX
  return (
    <React.Fragment>
      <HeaderComponent Redux={Redux} >
        <img src={Redux.state.ReceivedObject?.Retrieve?.image?.url} alt="Burce Mars" />

        {Redux.state.ReceivedObject?.Retrieve?.firstName} 
        {Redux.state.ReceivedObject?.Retrieve?.lastName}

        Are you sure! You want to delete your account?
        <button onClick={OnClick}>
          Sure, Delete My Account!
        </button>
        
      </HeaderComponent>
    </React.Fragment>
  )
}

export default ProfileDeleteComponent