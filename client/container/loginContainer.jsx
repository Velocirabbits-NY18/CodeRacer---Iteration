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
                <a href={"https://github.com/login/oauth/authorize?client_id=3b5392180e51bf2368e3&redirect_uri=http://localhost:3000/callback"}>login with github</a>
            </div>
        </div>
        )
    }
}


export default Login