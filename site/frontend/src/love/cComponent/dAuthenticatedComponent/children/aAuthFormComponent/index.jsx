import React from 'react'
import { Link } from "react-router-dom";


const AuthFormComponent = ({ Data, Redux, ReduxUltimate }) => {
  return (
    <React.Fragment>
      {Data.title}
      {ReduxUltimate.state.RequiredObject?.Loading ? "Loading..." :
        <React.Fragment>
          {Data.inputs.map((each, index) => {
            return (
              <React.Fragment key={index} >
                <input 
                  type={each.type}  
                  name={each.name}
                  label={each.label}
                  placeholder={each.placeholder} 
                  onChange={each.onChange}  
                />
                {Redux.state.FormObject.FormError?.[each.name]}
              </React.Fragment>
            )
          }) }

          {Data.buttons.map((each, index) =>  {
            return (
              <React.Fragment key={index}>
                <button onClick={each.onClick}>
                  {each.label}
                </button>
              </React.Fragment>
            )
          }) }

          {Data.links.map((each, index) => {
            return (
              <React.Fragment key={index}>
                {each?.note}{" "}
                <Link to={each.route} >{each.label}</Link>
              </React.Fragment>
            )
          }) }
        </React.Fragment> 
      }
    </React.Fragment>
  )
}

export default AuthFormComponent