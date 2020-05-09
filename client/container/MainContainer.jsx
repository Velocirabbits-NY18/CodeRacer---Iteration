import React, { Component, useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx'
import InputField from '../components/InputField.jsx'
import CodeSnippet from '../components/CodeSnippet.jsx'



const MainContainer = () => {

  const handleClick = (e) => {

  }

  return (
    <div className='mainContainer'>
      <div className='navBarContainer'>
        < NavBar handleClick={ handleClick }/>
      </div>

      <div className='codeSnippetContainer'>
        < CodeSnippet />
      </div>

      <div className='inputFieldContainer'>
        < InputField />
      </div>

    </div>
  )
}

export default MainContainer;