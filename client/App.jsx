import React, { Component, useState, useEffect } from 'react';
import LoginContainer from './container/loginContainer.jsx';
import MainContainer from './container/MainContainer.jsx'

class App extends Component {
    constructor(props) {
        super (props);
    }

    render() {
      return (
        <div className='containers'>

          <div className='login'>  
            < LoginContainer />
          </div>

          <div className='main'>
            < MainContainer />
          </div>
          
        </div>
      )
    }
}

export default App;