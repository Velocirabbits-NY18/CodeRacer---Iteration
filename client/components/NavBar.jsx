import React, { Component, useState, useEffect } from 'react';
import CodeSnippet from './CodeSnippet.jsx'



const categories = ['React', 'Javascript Algorithms', 'MongoDB', 'Express', 'SQL']

const NavBar = props => {

  const handleClick = () => {
    // Query for code snippets based on the category clicked
    // Once data is received, populate the CodeSnippet with the results
  }

  // Use categories array instead of hardCoding

  return(
    <div>

      <div className="navBar">
        <ul id="categories">
          <li>React</li>
          <li>JavaScript</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>SQL</li>
        </ul>
      </div>

      <div >
        < CodeSnippet />
      </div>

    </div>
  )
}

export default NavBar;