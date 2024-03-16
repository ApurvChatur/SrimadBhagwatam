import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import FinalRouteName from '@/love/gRoute/FinalRouteName';
import HeaderComponent from '../../component/aHeaderComponent';


const ProfileRetrieveComponent = ({ Redux }) => {
  // JSX
  return (
    <React.Fragment>
      <HeaderComponent Redux={Redux} >
        <img src={Redux.state.ReceivedObject?.Retrieve?.image?.url} alt="Profile" />
        {Redux.state.ReceivedObject?.Retrieve?.firstName} 
        {Redux.state.ReceivedObject?.Retrieve?.lastName}

        Profile Picture: {" "}
        <img src={Redux.state.ReceivedObject?.Retrieve?.image?.url} alt="Burce Mars" />
        First Name: {" "}
        {Redux.state.ReceivedObject?.Retrieve?.firstName}
        Last Name: {" "}
        {Redux.state.ReceivedObject?.Retrieve?.lastName}
        Email: {" "}
        {Redux.state.ReceivedObject?.Retrieve?.email}
        Mobile: {" "}
        {Redux.state.ReceivedObject?.Retrieve?.mobile}

        Cover Image: {" "}
        <img src={Redux.state.ReceivedObject?.Retrieve?.coverImage?.url} alt="Burce Mars" />
        Title: {" "}
        {Redux.state.ReceivedObject?.Retrieve?.title}
        Subtitle: {" "}
        {Redux.state.ReceivedObject?.Retrieve?.subtitle}
        Description: {" "}
        {Redux.state.ReceivedObject?.Retrieve?.description}

        Role: {" "}
        {Redux.state.ReceivedObject?.Retrieve?.role?.aTitle}

        Address: {" "}
        {Redux.state.ReceivedObject?.Retrieve?.address ? `
          ${Redux.state.ReceivedObject?.Retrieve?.address?.lane}, 
          ${Redux.state.ReceivedObject?.Retrieve?.address?.street}, 
          ${Redux.state.ReceivedObject?.Retrieve?.address?.city}, 
          ${Redux.state.ReceivedObject?.Retrieve?.address?.state}, 
          ${Redux.state.ReceivedObject?.Retrieve?.address?.country}, 
          ${Redux.state.ReceivedObject?.Retrieve?.address?.pinCode}, 
        ` : '-'
        }
        Links: {" "}
        {Redux.state.ReceivedObject?.Retrieve?.links?.map((each, index) => {
          return (
            <React.Fragment key={index} >
              <a href={each?.url} ml={2}>{each?.title}</a>
            </React.Fragment>
          )
        })}

      </HeaderComponent>
    </React.Fragment>
  )
}

export default ProfileRetrieveComponent