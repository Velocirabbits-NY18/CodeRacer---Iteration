import React, { Component, useState, useEffect } from 'react';



const CodeSnippet = props => {
  if (Object.keys(props.content).length === 0) {
    return (
      <div id="snippet">
        <p id='snippetText'>Please select a category to get started</p>
      </div>
    )
  }
  else {
     console.log(props)
    return (
      <div className='snippetContainer'>
  
        <div id="snippet">
          <p id='snippetText'>{ props.content.content }</p>
        </div>
  
      </div>
    )
  }
}

export default CodeSnippet;