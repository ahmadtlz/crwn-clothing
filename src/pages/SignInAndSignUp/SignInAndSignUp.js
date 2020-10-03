import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

import './SignInAndSignUp.scss'
const SignInAndSignUp = () => {
  return (
    <div className="signIn-and-signUp">
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default SignInAndSignUp
