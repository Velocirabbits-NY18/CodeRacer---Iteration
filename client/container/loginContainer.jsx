import React, { Component } from 'react';




class Login extends Component{
    constructor(props){
        super (props);
    }

    render(){
        return(
        <div className = "login">
            <div className = "message">
                <h2 className = "welcome">Welcome User, to <span className ="title"> CODERACER</span></h2>
                <button> Sign in with Github</button>
            </div>
        </div>
        )
    }
}


export default Login