import React, { Component, useState, useEffect } from 'react';
import Results from './Results.jsx'



const InputField = props => {
  
  // When CodeSnippet renders, it should add an event listener for on keypress
  // useEffect(() => {
  //   document.addEventListener('keypress', )
  //   // on keypress, it should do something
  // })


  return (
    <div className='inputContainer'>
      <input id='textInput' type='text' placeholder="This is where people type stuff"></input>

      <p id='currentWPM'>
        {/* Current WPM */}
        95
      </p>
      
      <div className='resultsContainer'>
        < Results />
      </div>
    </div>
  )
}

export default InputField;