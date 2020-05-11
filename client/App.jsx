import React, { Component, useState, useEffect } from 'react';
import LoginContainer from './container/loginContainer.jsx';
import MainContainer from './container/MainContainer.jsx'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Checks to see if the user is logged in
  useEffect(() => {
    fetch('/verify')
    .then(res => {
      if (res.status === 200) {
        // console.log("WE GOT HERE and are setting the state")
        setIsLoggedIn(loggedIn => loggedIn = true)
        // console.log("THIS IS THE STATE", isLoggedIn) 
      } 
      // else console.log("we failed to verify the JWT")
    })
  })

  // If the user is successfully logged in: show main page
  // If not, show login page
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