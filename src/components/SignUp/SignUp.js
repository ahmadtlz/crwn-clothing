import React, { useState } from 'react'
import {connect}from 'react-redux'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {signUpStart}from '../../redux/user/user.action'
import { SignUpContainer, SignUpTitle } from './SignUp.styles';
const SignUp=({signUpStart})=>{

const [userCredentials, setUserCredentials] = useState({
  displayName:'',
  email:'',
  password:'',
  confirmPassword:''
})
 const {displayName,email,password,confirmPassword}=userCredentials;
  
  const handleSubmit=async e=>{
    e.preventDefault();
   
    if(password !== confirmPassword){
      alert("password don't match")
      return;
    }
    signUpStart({displayName,email,password})
  
  }

  const handleChange=e=>{
    const{name,value}=e.target;
    setUserCredentials({...userCredentials,[name]:value})
  }


  return (
      <SignUpContainer >
        <SignUpTitle >I don not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form  onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name="displayName"
            value={displayName}
            handleChange={handleChange}
            label='Display name'
            required
          />
          <FormInput
            type='email'
            name="email"
            value={email}
            handleChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name="password"
            value={password}
            handleChange={handleChange}
            label='Password '
            required
          />
          <FormInput
            type='password'
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
            label='Confirm Password '
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>

        </form>
      </SignUpContainer>
    )
  
}


const mapDispatchToProps=dispatch=>({
  signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})



export default connect(null,mapDispatchToProps)(SignUp);
