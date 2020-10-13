import React, { Component } from 'react'
import {connect}from 'react-redux'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {signUpStart}from '../../redux/user/user.action'
import { SignUpContainer, SignUpTitle } from './SignUp.styles';
export class SignUp extends Component {
  constructor(){
    super();
    this.state={
      displayName:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  }

  handleSubmit=async e=>{
    e.preventDefault();
    const {signUpStart}=this.props;
    const {displayName,email,password,confirmPassword} =this.state
   
    if(password !== confirmPassword){
      alert("password don't match")
      return;
    }
    signUpStart({displayName,email,password})
  
  }

  handleChange=e=>{
    const{name,value}=e.target;
    this.setState({[name]:value})
  }

  render() {
    const {displayName,email,password,confirmPassword} =this.state
    return (
      <SignUpContainer >
        <SignUpTitle >I don not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form  onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label='Display name'
            required
          />
          <FormInput
            type='email'
            name="email"
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name="password"
            value={password}
            handleChange={this.handleChange}
            label='Password '
            required
          />
          <FormInput
            type='password'
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password '
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>

        </form>
      </SignUpContainer>
    )
  }
}


const mapDispatchToProps=dispatch=>({
  signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})



export default connect(null,mapDispatchToProps)(SignUp);
