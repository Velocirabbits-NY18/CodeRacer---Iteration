import React, { Component, useState, useEffect } from 'react';
import Results from './Results.jsx'


// calculatewpm = (typedCharacters/5) / endTime-startTime          *          60seconds / endTime-startTime

const InputField = props => {

  return (
    <div className='inputContainer'>
      <input id='textInput' type='text' placeholder="This is where people type stuff" onInput={(e)=> (console.log(e.target.value.slice(-1)))} ></input>

      <p id='currentWPM'>
        {/* Current WPM */}
        95
      </p>
      
        < Results content={ props.content }/>

    </div>
  )
}


const checkForErrors = callback => {

}


export default InputField;