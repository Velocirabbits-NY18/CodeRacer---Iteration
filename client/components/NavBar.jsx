import React, { Component, useState, useEffect } from 'react';


const NavBar = props => {
  let categoryArray;
  console.log("Has the race started?",props.isRaceStarted)
  // If the race has NOT started (passed from MainContainer)
  if (props.isRaceStarted === false) {
    // User has access to choose category
    categoryArray = props.categories.map((category, i) => (
    <li key={`category${i}`} id={`category${i}`} onClick={() => props.handleClick(category)}> { category } </li>
  ))
  }
  else {
    // If the race started, they can't change category
    categoryArray = props.categories.map((category, i) => (
      <li className = "disabled" key={`category${i}`} id={`category${i}`}> { category } </li>
    ))
  }

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