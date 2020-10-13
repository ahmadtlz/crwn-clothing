import React, { useState } from 'react'
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action'

import {SignInContainer,SignInTitle,ButtonsBarContainer}from './SignIn.styles'


const SignIn=({emailSignInStart,googleSignInStart})=>{

  const [userCredentials, setUserCredentials] = useState({email:'',password:''})
  const {email,password}=userCredentials;
  

  const handleSubmit= async e=>{
    e.preventDefault();
    emailSignInStart(email,password)

  }

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserCredentials({...userCredentials,[name]:value})
  }
  
  

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput 
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required 
          label="Email"
          />
          <FormInput 
          type="password"
          name="password"
          value={password} 
          handleChange={handleChange} 
          required 
          label="Password"/>
          <ButtonsBarContainer>
            <CustomButton type="submit" >
              Sign in
            </CustomButton>

            <CustomButton  
              type='button'
              onClick={googleSignInStart}
              isGoogleSignIn >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  
}


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
