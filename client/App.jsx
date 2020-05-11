import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import LoginContainer from './container/loginContainer.jsx';
import MainContainer from './container/MainContainer.jsx'

// class App extends Component {
//     constructor(props) {
//         super (props);
//         this.state = {
//           isLoggedIn: false
//         }
//     }

// //     componentDidMount() {
// //       fetch('/verify')
// //         .then(res => {
// //           if (res.status === 200)
// //           {
// //             console.log("WE GOT HERE and are setting the state")
// //             this.setState({ isLoggedIn: true })
// //             console.log("THIS IS THE STATE", this.state)
// //           } 
// //         })
// //     }
//     render() {
//         return (
//           <div className='containers'>
//          <Router>
//             <ul>
//              <li><Link to = {'/'}> Login </Link></li>
//              <li><Link to = {'/'}> Main Page </Link></li>
//              </ul>
//            <Switch>
//              <Route path = '/' component = {LoginContainer} />
//              <Route path = '/main' component = {MainContainer} />
//            </Switch>
//          </Router>    
//           </div>
//         )
//       } 
//     }




const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/verify')
    .then(res => {
      if (res.status === 200)
      {
        console.log("WE GOT HERE and are setting the state")
        setIsLoggedIn(loggedIn => loggedIn = true)
        console.log("THIS IS THE STATE", isLoggedIn) 
      } 
      else console.log("we failed to verify the JWT")
    })
  })


  if (isLoggedIn) {
    return (
      <div className='containers'>
        
        < MainContainer />
  
      </div>
    )
  } else {
    return (
    <div className='containers'>

      < LoginContainer />
    
    </div>
  )}
}

export default App;