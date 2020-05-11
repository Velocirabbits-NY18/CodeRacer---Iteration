import React, { Component, useState, useEffect } from 'react';



const CodeSnippet = props => {
  const [currentLine,setCurrentLine] = useState(0);
  const [currentWordCheck,setCurrentWord] = useState(0);
  const [currentIndex,setCurrentIndex] = useState(0);
  const [completedPortion,setCompletedPortion] = useState('')

  // If the user hasn't selected a category, render this:
  if (Object.keys(props.content).length === 0) {
    return (
      <div className='snippetContainer'>
        <div id="snippet">
          <p className = "crtSpecial" id='noText'>Please select a category to get started...</p>
        </div>
      </div>
    )
  }
  else {
    // If the user selected a category, render this:
    // all of the logic for the text highlighting when typing is in here. 
    // Brief: 
    // has inputValue and completedWords from props, given up through the inputfield via a function that edits state of the maincontainer
    // inputValue is the literal value of the textArea 
    //completedWords is an array of full words handled from the checkErrors function in inputfield
    // it then proceeds to use these variables to produce x many spans where x is the number chars of a particular code snippet.
    // this took hours to create so I suggest not messing with it unless you want to entirely overhaul the way verification is done because they are tied to gether.
    // Also note that the text actually has no spaces. this achieved via a 2em margin to the right of the span
    return (
      <div className='snippetContainer'>
        
        <div id="snippet">
          <p>
        {
          // we process the content.content, which is the snippet displayed on the screen to eliminate all tabs or trailing spaces
        // we then chop it up into an array which will then form the spans of our snippet display
              props.content.content.trim().split(/[ \t]+/).map((word, w_idx) =>{
                // we will go by word and the word's attributes are determined below
                let highlight = false;
                let currentWord = false;
                // first we do checks to see if the given span generated will have the above qualities

                // this means that the word is completed, so turn it green. Green = completed
                if (props.completedWords.length > w_idx) {
                  highlight = true;
                }
  
                if (props.completedWords.length === w_idx) {
                  currentWord = true;
                }
                // this is where we make our spans based on the above booleans
                return (
                  <span
                    className={`word 
                                  ${highlight && 'green'}  
                                  ${currentWord && 'underline'}`}
                    key={w_idx}>
                    {/* We then take our word, split into individual letters and those will becomes spans */}
                    {word.split('').map((letter, l_idx) => {
                      /* this is the logic to see where we are on the current word and change the span qualities accordingly*/
                      const isCurrentWord = w_idx === props.completedWords.length;
                      const isWronglyTyped = letter !== props.inputValue[l_idx];
                      const shouldBeHighlighted = l_idx < props.inputValue.length;
                      //  we chain several ternaries here to check what letter should be what color.
                      return (
                        <span 
                          className={`letter ${
                            isCurrentWord && shouldBeHighlighted
                              ? isWronglyTyped
                                ? 'red'
                                : 'green'
                              : ''
                          }`}
                          key={l_idx}>
                          {letter}
                        </span>
                      );
                    })}
                  </span>
                );
              }
              )
  
             }
             </p>
        
        </div>
  
      </div>
    )
  }
}

export default CodeSnippet;
