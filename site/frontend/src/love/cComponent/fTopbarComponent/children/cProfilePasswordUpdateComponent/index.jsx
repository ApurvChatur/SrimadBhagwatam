import React, { useEffect, useRef } from 'react'
import handleInput from '@/love/dFunction/dHandleInput';
import HeaderComponent from '../../component/aHeaderComponent';


const ProfilePasswordUpdateComponent = ({ Redux, OnClick }) => {
  // JSX
  return (
    <React.Fragment>
      <HeaderComponent Redux={Redux} >
        <img src={Redux.state.ReceivedObject?.Retrieve?.image?.url} alt="Burce Mars" />

        {Redux.state.ReceivedObject?.Retrieve?.firstName} 
        {Redux.state.ReceivedObject?.Retrieve?.lastName}

        <input 
        type='password' 
        name='oldPassword'
        label='Old Password'
        placeholder='Old Password' 
        onChange={event => handleInput(event, Redux)}
        value={Redux.state.FormObject?.FormValue?.title}
        />
        {Redux.state.FormObject.FormError?.['oldPassword']}

        <input 
          type='password' 
          name='newPassword'
          label='New Password'
          placeholder='New Password' 
          onChange={event => handleInput(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.subtitle}
        />
        {Redux.state.FormObject.FormError?.['newPassword']}

        <input 
          type='password' 
          name='confirmPassword'
          label='Confirm Password'
          placeholder='Confirm Password' 
          onChange={event => handleInput(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.description}
        />
        {Redux.state.FormObject.FormError?.['confirmPassword']}

        <button onClick={OnClick}>
          Update Profile Password
        </button>
      </HeaderComponent>
    </React.Fragment>
  )
}

export default ProfilePasswordUpdateComponent