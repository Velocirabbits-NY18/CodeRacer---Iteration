import React, { Component, useState, useEffect } from 'react';
import CodeSnippet from './CodeSnippet.jsx'


const categories = ['React', 'Javascript Algorithms', 'HTML', 'Express', 'SQL']

const NavBar = () => {

  const handleClick = () => {
    // Query for code snippets based on the category clicked
    // Once data is received, populate the CodeSnippet with the results
  }

  const categoryArray = [];

  categories.forEach(category => {
    categoryArray.push(
      <li className='categories'>{category}</li>
    )
  })

  return(
    <div>
      <div className="navBar">
        <ul id="nav">
          { categoryArray }
        </ul>
      </div>
      <div id='codeSnippetContainer'>
        < CodeSnippet />
      </div>
    </div>
  )
}