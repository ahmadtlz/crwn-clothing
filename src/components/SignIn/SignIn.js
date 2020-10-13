import React, { Component } from 'react'
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action'

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
  const {emailSignInStart}=this.props;
  const {email,password}=this.state;
  emailSignInStart(email,password)


}

handleChange=(e)=>{
  const {name,value}=e.target;
  this.setState({[name]:value})
}
 
  render() {
    const {googleSignInStart}=this.props
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
}


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
