import React, { Component, useState, useEffect } from 'react';
import LoginContainer from './container/loginContainer.jsx';
import MainContainer from './container/MainContainer.jsx'

class App extends Component {
    constructor(props) {
        super (props);
    }

    render() {
      return (
        <div>

          <div>  
            < LoginContainer />
          </div>

          <div>
            < MainContainer />
          </div>
          
        </div>
      )
    }
}

export default App;