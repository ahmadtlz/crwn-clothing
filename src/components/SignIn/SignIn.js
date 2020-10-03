import React, { Component } from 'react'
import './SignIn.styles.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {auth,signInWithGoogle} from '../../firebase/firebase.util'

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
      <div className='sign-in'>
        <h2>I already have an account</h2>
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
          <div className="buttons">
            <CustomButton type="submit" >
              Sign in
            </CustomButton>

            <CustomButton isGoogleSignIn onClick={signInWithGoogle} >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
