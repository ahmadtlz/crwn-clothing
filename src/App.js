import React, { Component } from 'react';
import Homepage from './pages/Homepage/Homepage'
import { Route ,Switch} from 'react-router-dom'

import './App.css';

const Hatspage=()=>{
 return <div>
     <h1>hats</h1>
  </div>
}

class App extends Component {
  render() {
    return(
      <>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  path="/hats" component={Hatspage} />
        </Switch>
      </>
    )
  }
}

export default App;
