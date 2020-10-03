import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {auth ,createUserProfileDocument} from '../../firebase/firebase.util'
import './SignUp.styles.scss'

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
    const {displayName,email,password,confirmPassword} =this.state
    if(password !== confirmPassword){
      alert("password don't match")
      return;
    }

    try {
      const {user}=await auth.createUserWithEmailAndPassword(email,password)
      createUserProfileDocument(user,{displayName})
      this.setState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
      })
    } catch (e) {
      console.log(e)
    }
  }

  handleChange=e=>{
    const{name,value}=e.target;
    this.setState({[name]:value})
  }

  render() {
    const {displayName,email,password,confirmPassword} =this.state
    return (
      <div className='sign-up'>
        <h2 className="title">I don not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
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
      </div>
    )
  }
}

export default SignUp
