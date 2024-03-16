import handleInput from "@/love/dFunction/dHandleInput"
import Function from "./Function"
import FinalRouteName from "@/love/gRoute/FinalRouteName"
import validateFormObject from "@/love/dFunction/bValidateFormObject"


const Data = (Redux) => {
  return (
    {
      title: "Login",
      inputs: [
        {
          label: "Email",
          placeholder: "Email",
          type: "email",
          name: "email",
          onChange: event => handleInput(event, Redux),
        },
        {
          label: "Password",
          placeholder: "Password",
          type: "password",
          name: "password",
          onChange: event => handleInput(event, Redux),
        },    
      ],
      buttons: [
        {
          type: "button",
          label: "Login",
          onClick: event => validateFormObject(event, Redux, Function.validateFormValues)
        }
      ],
      links: [
        {
          note: "Don't have an account?",
          label: "Register",
          route: FinalRouteName.AuthRoute.RegisterRoute
        },
        {
          note: "Forgot password?",
          label: "Reset",
          route: FinalRouteName.AuthRoute.ForgotPasswordRoute
        },
      ]
    }
  )
}

export default Data