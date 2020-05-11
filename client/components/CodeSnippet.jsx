import React, { Component, useState, useEffect } from 'react';



const CodeSnippet = props => {

  const [currentLine,setCurrentLine] = useState(0);
  const [currentWordCheck,setCurrentWord] = useState(0);
  const [currentIndex,setCurrentIndex] = useState(0);
  const [completedPortion,setCompletedPortion] = useState('')


 

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
    // console.log(props.inputValue)
    // console.log(props.completedWords)
    // console.log(props.content.content.split(/[ \t]+/))
    // console.log("split by line",props.content.content.split('\n'))
   
     //console.log(props)
    //  let contentSplitWords = props.content.content.split(/[ \t]+/)
    //  let contentSplitLine = props.content.content.split('\n')
    //  let contentLineLength = contentSplitLine[currentLine].trim().split(/[ \t]+/).length
    //  console.log("line split by space",contentSplitLine[currentLine].trim().split(/[ \t]+/))
    
    //  if (props.completedWords.length>contentLineLength){
    //   setCurrentIndex(contentLineLength)
    //   setCompletedPortion(line => line+contentSplitLine[currentLine])
    //   setCurrentLine(line => line+1);
     
    // }
    return (
      <div className='snippetContainer'>
  
        <div id="snippet">
          <p>
        {
              props.content.content.trim().split(/[ \t]+/).map((word, w_idx) =>{

                let highlight = false;
                let currentWord = false;
                // this means that the word is completed, so turn it green
               // console.log("This is our current length subtracting our index",props.completedWords.length-currentIndex)
                if (props.completedWords.length > w_idx) {
                  highlight = true;
                }
  
                if (props.completedWords.length === w_idx) {
                  currentWord = true;
                }
  
                return (
                  <span
                    className={`word 
                                  ${highlight && 'green'} 
                                  ${currentWord && 'underline'}`}
                    key={w_idx}>
                    {word.split('').map((letter, l_idx) => {
                      const isCurrentWord = w_idx === props.completedWords.length;
                      const isWronglyTyped = letter !== props.inputValue[l_idx];
                      const shouldBeHighlighted = l_idx < props.inputValue.length;
  
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
          
            {/* <pre id= 'snippetText' className= "finishedSnippet">
             {completedPortion}
            </pre>
            <pre className ="currentLine">

             {
              contentSplitLine[currentLine].trim().split(/[ \t]+/).map((word, w_idx) =>{

                let highlight = false;
                let currentWord = false;
                console.log(currentLine)
                // this means that the word is completed, so turn it green
                console.log("This is our current length subtracting our index",props.completedWords.length-currentIndex)
                if (props.completedWords.length-currentIndex > w_idx) {
                  highlight = true;
                }
  
                if (props.completedWords.length-currentIndex === w_idx) {
                  currentWord = true;
                }
  
                return (
                  <span
                    className={`word 
                                  ${highlight && 'green'} 
                                  ${currentWord && 'underline'}`}
                    key={w_idx}>
                    {word.split('').map((letter, l_idx) => {
                      const isCurrentWord = w_idx === props.completedWords.length-currentIndex;
                      const isWronglyTyped = letter !== props.inputValue[l_idx];
                      const shouldBeHighlighted = l_idx < props.inputValue.length;
  
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

           </pre>
           <pre className ="pendingSnippet">
             {props.content.content.split(completedPortion+contentSplitLine[currentLine])[1]}
            </pre> */}
           
          
        </div>
  
      </div>
    )
  }
}

export default CodeSnippet;


         {/* {props.content.content.split(' ').map((word, w_idx) => {
							let highlight = false;
							let currentWord = false;

							// this means that the word is completed, so turn it green
							if (props.completedWords.length > w_idx) {
								highlight = true;
							}

							if (props.completedWords.length === w_idx) {
								currentWord = true;
							}

							return (
								<span
									className={`word 
                                ${highlight && 'green'} 
                                ${currentWord && 'underline'}`}
									key={w_idx}>
									{word.split('').map((letter, l_idx) => {
										const isCurrentWord = w_idx === props.completedWords.length;
										const isWronglyTyped = letter !== props.inputValue[l_idx];
										const shouldBeHighlighted = l_idx < props.inputValue.length;

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
						})} */}