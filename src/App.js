import React, { useEffect } from 'react';
import { Route ,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Homepage from './pages/Homepage/Homepage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import Header from './components/Header/Header'
import {selectCurrentUser} from './redux/user/user.selectors'
import {checkUserSession}from './redux/user/user.action'

import './App.css'
;
const App  =({checkUserSession,currentUser})=> {
  
  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])

    return(
      <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={()=>currentUser?(<Redirect to="/"/>): (<SignInAndSignUp/>)
          }/>
        </Switch>
      </>
    )
  
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
})
const mapDispatchToProps=dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
