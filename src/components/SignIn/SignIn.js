import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {auth,signInWithGoogle} from '../../firebase/firebase.util'

import {SignInContainer,SignInTitle,ButtonsBarContainer}from './SignIn.styles'
export class SignIn extends Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:''
    }
  }
handleSubmit= async e=>{
  e.preventDefault();
  const {email,password}=this.state;
  try {
    await auth.signInWithEmailAndPassword(email,password);
    this.setState({email:'',password:''})
  } catch (e) {
    console.log(e)
  } 

}

handleChange=(e)=>{
  const {name,value}=e.target;
  this.setState({[name]:value})
}
 
  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
          type="email"
          name="email"
          value={this.state.email}
          handleChange={this.handleChange}
          required 
          label="Email"
          />
          <FormInput 
          type="password"
          name="password"
          value={this.state.password} 
          handleChange={this.handleChange} 
          required 
          label="Password"/>
          <ButtonsBarContainer>
            <CustomButton type="submit" >
              Sign in
            </CustomButton>

            <CustomButton isGoogleSignIn onClick={signInWithGoogle} >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  }
}

export default SignIn
