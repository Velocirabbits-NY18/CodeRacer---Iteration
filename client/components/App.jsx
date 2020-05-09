import React, { Component, useState, useEffect } from 'react';
import MainContainer from '../containers/MainContainer.jsx'


class App extends Component{
  constructor(props){
    super (props);
  }

  render() {
    return (
      <div>
        <div id="title">
            <h1>CodeRacer</h1>
        </div>
          < MainContainer />
      </div>
    )
  }
}

export default App;