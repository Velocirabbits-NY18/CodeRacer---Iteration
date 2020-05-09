import React, { Component, useState, useEffect } from 'react';


const NavBar = props => {
  const categoryArray = props.categories.map((category, i) => (
    <li key={`category${i}`} id={`category${i}`} onClick={() => props.handleClick(category)}> { category } </li>
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