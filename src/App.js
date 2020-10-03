import React, { Component } from 'react';
import { Route ,Switch} from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import Header from './components/Header/Header'
import {auth,createUserProfileDocument} from './firebase/firebase.util';


import './App.css';
class App extends Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){ 
       const userRef=await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot=>{
          this.setState({currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }});
          // console.log(this.state)
        });
      }else{
        this.setState({currentUser:userAuth})
      }
      console.log(this.state)
      // 
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  path="/shop" component={ShopPage} />
          <Route  path="/signin" component={SignInAndSignUp} />
        </Switch>
      </>
    )
  }
}

export default App;
