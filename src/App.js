import React, { Component } from 'react';
import { Route ,Switch} from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'
import ShopPage from './pages/ShopPage/ShopPage'

import './App.css';
class App extends Component {
  render() {
    return(
      <>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  path="/shop" component={ShopPage} />
        </Switch>
      </>
    )
  }
}

export default App;
