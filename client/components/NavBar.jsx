import React, { Component, useState, useEffect } from 'react';



const categories = ['React', 'Javascript Algorithms', 'MongoDB', 'Express', 'SQL']

const NavBar = props => {
  // Use categories array instead of hardCoding
  const categoryArray = categories.map((category, i) => (
    <li key={`category${i}`} id={`category${i}`} handleClick={props.handleClick}> { category } </li>
  ))

  return(
    <div className='navBarContainer'>

      <div className="navBar">
        <ul id="categories">
          { categoryArray }
        </ul>
      </div>

    </div>
  )
}

export default NavBar;