import React, { Component, useState, useEffect } from 'react';
import LoginContainer from './container/loginContainer.jsx';

class App extends Component{
    constructor(props){
        super (props);
    }

    render(){
        return(
            <div>  
             <LoginContainer/>
            </div>
        )
    }
}

export default App;