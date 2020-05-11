import React, { Component, useState, useEffect } from 'react';
import Results from './Results.jsx'


// calculatewpm = (typedCharacters/5) / endTime-startTime          *          60seconds / endTime-startTime





const InputField = props => {
  const [startTime, setStartTime] = useState(0);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [completedWords, setCompletedWords] = useState([]);
  const [snippetSpace, setSnippetSpace] = useState([]);
  const [snippetProp, setSnippetProp] = useState('');

 
  const resetState = () => {
    setStartTime(0)
    setWordsPerMinute(0)
    setCompletedWords([])
    setSnippetSpace([])
    setSnippetProp('')
    console.log('You win!')
  }

  useEffect(() => {
    if (snippetSpace.length === 0 && props.content.content)
    {
      setSnippetSpace(space=>space=props.content.content.split(" "))
      setSnippetProp(snip => snip = props.content.content )
      // document.querySelector('#textInput').value = '';
    }
  })
  
  if (props.content.content) {
    // console.log('snippetSpace', snippetSpace)
    // console.log('split contents', props.content.content.split(' '))
    if (snippetProp != props.content.content){
      setSnippetSpace(space=>space=props.content.content.split(" "))
      setSnippetProp(snip => snip = props.content.content )
    }
  }


  const checkForErrors = (event) => {
    // we won't care about tabbing.
    console.log("we are doing something")
    let snippetWords = snippetSpace ////,//////////////////snippet.split(' ')
    console.log("Snippet words", snippetWords)
    let wholeWord = event.target.value;
    console.log("wholeWord",wholeWord)
    let lastInput = wholeWord[wholeWord.length-1]
    console.log('lastInput', lastInput)

  
    const currentWord = snippetWords[0]
    console.log("current word",currentWord)
    if (lastInput === ' ' || lastInput === "\n"){
      console.log("We got a match")
      console.log(wholeWord.trim(),"===", currentWord)
      if (wholeWord.trim() === currentWord.trim()){
        console.log("WE MATCHED OUR TRIM")
        let remainingWords = [...snippetWords.slice(1)]
        console.log(remainingWords)
          if (remainingWords.length === 0) {
            event.target.value = ''
            return resetState();
          }
        //let finishedWords = [...completedWords,currentWord]
        event.target.value = ''
        setSnippetSpace(remainingWords)
      }
      else {
        event.target.value = wholeWord.trim()
      }
    }
    else{
      // update wholeWord
      //update lastInput
    
    }
  
  }

  const startRace = () => {
    if (startTime === 0) {
    setStartTime(prevTime => Date.now());
    console.log("GO! CURRENT TIME IS",startTime)
    }
  }
  
  

  const calculateWPM = (event) =>{
    let inputLength = event.target.value.length;
    let words = inputLength/5;
    let elapsedTime = Date.now()-startTime;
    let wordsToTime = words/elapsedTime;
    let minute = 60000
    let wpm = (words*minute)/elapsedTime;
    setWordsPerMinute(prevWPM => (wpm.toFixed(2)))
  }

  return (
    <div className='inputContainer'>
      <textarea id='textInput' placeholder="Click Here to Start The CODERACE"
                onFocus ={startRace} 
                onInput={(e)=> { checkForErrors(e)/*checkForErrors(e.target.value.slice(-1))*/; calculateWPM(e) }} 
      ></textarea>

      <p id='currentWPM'>
        {/* Current WPM */}
        current WPM: {wordsPerMinute}
      </p>
  
        < Results content={ props.content } />

    </div>
  )
}

export default InputField;