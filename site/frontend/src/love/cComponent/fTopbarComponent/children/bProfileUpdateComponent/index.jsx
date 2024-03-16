import React, { useEffect, useRef } from 'react'
import handleInput from '@/love/dFunction/dHandleInput';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../component/aHeaderComponent';


const ProfileUpdateComponent = ({ Redux, EventHandler, OnClick }) => {
  const inputElement1 = useRef()
  const inputElement2 = useRef()

  // JSX
  return (
    <React.Fragment>
      <HeaderComponent Redux={Redux} >
        <img src={Redux.state.ReceivedObject?.Retrieve?.image?.url} alt="Burce Mars" />

        {Redux.state.ReceivedObject?.Retrieve?.firstName} 
        {Redux.state.ReceivedObject?.Retrieve?.lastName}

        <button onClick={() => inputElement1.current.click()} >
          Choose Profile Picture
        </button>
        <img src={Redux.state.FormObject?.FormValue?.image?.url} alt="Burce Mars" />

        <input 
          type='text' 
          name='firstName'
          label='First Name'
          placeholder='First Name' 
          onChange={event => handleInput(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.firstName}
        />
        {Redux.state.FormObject.FormError?.['firstName']}
        <input 
          type='text' 
          name='lastName'
          label='Last Name'
          placeholder='Last Name' 
          onChange={event => handleInput(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.lastName}
        />
        {Redux.state.FormObject.FormError?.['lastName']}
        <input 
          type='email' 
          name='email'
          label='Email'
          placeholder='Email' 
          onChange={event => handleInput(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.email}
        />
        {Redux.state.FormObject.FormError?.['email']}
        <input 
          type='text' 
          name='mobile'
          label='Mobile'
          placeholder='Mobile' 
          onChange={event => handleInput(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.mobile}
        />
        {Redux.state.FormObject.FormError?.['mobile']}

        <button 
          size="small" 
          variant="outlined" 
          color="info" 
          component={Link} 
          onClick={() => inputElement2.current.click()}
        >
          Choose Cover Image
        </button>
        <img src={Redux.state.FormObject?.FormValue?.coverImage?.url} alt="Burce Mars" />
        <input 
          type='text' 
          name='title'
          label='Title'
          placeholder='Title' 
          onChange={event => handleInput(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.title}
        />
        {Redux.state.FormObject.FormError?.['title']}
        <input 
          type='text' 
          name='subtitle'
          label='Subtitle'
          placeholder='Subtitle' 
          onChange={event => handleInput(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.subtitle}
        />
        {Redux.state.FormObject.FormError?.['subtitle']}
        <input 
          type='text' 
          name='description'
          label='Description'
          placeholder='Description' 
          onChange={event => handleInput(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.description}
        />
        {Redux.state.FormObject.FormError?.['description']}

        Address:
        <input 
          type='text' 
          name='lane'
          label='Lane'
          placeholder='Lane' 
          onChange={event => EventHandler.Address.Change(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.address?.lane}
        />
        {Redux.state.FormObject.FormError?.['title']}
        <input 
          type='text' 
          name='street'
          label='Street'
          placeholder='Street' 
          onChange={event => EventHandler.Address.Change(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.address?.street}
        />
        {Redux.state.FormObject.FormError?.['title']}
        <input 
          type='text' 
          name='city'
          label='City'
          placeholder='City' 
          onChange={event => EventHandler.Address.Change(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.address?.city}
        />
        {Redux.state.FormObject.FormError?.['title']}
        <input 
          type='text' 
          name='state'
          label='State'
          placeholder='State' 
          onChange={event => EventHandler.Address.Change(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.address?.state}
        />
        {Redux.state.FormObject.FormError?.['title']}
        <input 
          type='text' 
          name='country'
          label='Country'
          placeholder='Country' 
          onChange={event => EventHandler.Address.Change(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.address?.country}
        />
        {Redux.state.FormObject.FormError?.['title']}
        <input 
          type='text' 
          name='pinCode'
          label='Pin Code'
          placeholder='Pin Code' 
          onChange={event => EventHandler.Address.Change(event, Redux)}
          value={Redux.state.FormObject?.FormValue?.address?.pinCode}
        />
        {Redux.state.FormObject.FormError?.['title']}
        Links:
        <button onClick={() => EventHandler.Link.Add(Redux)} >
          add
        </button> 
        {Redux.state.FormObject.FormValue?.links?.map((each, index) => {
          return (
            <React.Fragment key={index}>
              <input 
                type='text' 
                name='title'
                label='Title'
                placeholder='Title' 
                onChange={event => EventHandler.Link.Change(event, Redux, index)}
                value={each?.title}
              />
              <input 
                type='text' 
                name='url'
                label='URL'
                placeholder='URL' 
                onChange={event => EventHandler.Link.Change(event, Redux, index)}
                value={each?.url}
              />
              <button onClick={() => EventHandler.Link.Remove(Redux, index)} >
                remove
              </button>                              
            </React.Fragment>
          )
        })}

        <button onClick={OnClick}>
          Update Profile
        </button>
        <input type="file" name="image" style={{display: "none"}} ref={inputElement1} onChange={event => handleInput(event, Redux)} />
        <input type="file" name="coverImage" style={{display: "none"}} ref={inputElement2} onChange={event => handleInput(event, Redux)} />

      </HeaderComponent>
    </React.Fragment>
  )
}

export default ProfileUpdateComponent