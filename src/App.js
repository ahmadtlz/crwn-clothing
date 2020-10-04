import React, { Component } from 'react';
import { Route ,Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import Homepage from './pages/Homepage/Homepage'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import Header from './components/Header/Header'

import {auth,createUserProfileDocument} from './firebase/firebase.util';
import {setCurrentUser} from './redux/user/user.action'

import './App.css';
class App extends Component {
  unsubscribeFromAuth=null
  componentDidMount(){
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){ 
       const userRef=await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          });
          
        });
      }else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  path="/shop" component={ShopPage} />
          <Route  path="/signin" component={SignInAndSignUp} />
        </Switch>
      </>
    )
  }
}

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
