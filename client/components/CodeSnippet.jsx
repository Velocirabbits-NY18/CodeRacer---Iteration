import React, { Component, useState, useEffect } from 'react';



const CodeSnippet = props => {
  if (Object.keys(props.content).length === 0) {
    return (
      <div className='snippetContainer'>
        <div id="snippet">
          <p className = "crtSpecial" id='noText'>Please select a category to get started</p>
        </div>
      </div>
    )
  }
  else {
     //console.log(props)
    return (
      <div className='snippetContainer'>
  
        <div id="snippet">
          <p id='snippetText'><pre>{ props.content.content }</pre></p>
        </div>
  
      </div>
    )
  }
}

export default CodeSnippet;