import React, { Component, useState, useEffect, useRef } from 'react';
import Results from './Results.jsx'


// calculatewpm = (typedCharacters/5) / endTime-startTime          *          60seconds / endTime-startTime





const InputField = props => {
  const [startTime, setStartTime] = useState(0);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [completedWords, setCompletedWords] = useState([]);
  const [snippetSpace, setSnippetSpace] = useState([]);
  const [snippetProp, setSnippetProp] = useState('');
  const [countDown, setCountDown] = useState(5);
  const [raceStarted, setRaceStarted] = useState(false);
  const [activeCountDown, setActiveCountDown] = useState(false)

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const resetState = () => {
    setStartTime(0)
    setWordsPerMinute(0)
    setCompletedWords([])
    setSnippetSpace([])
    setSnippetProp('')
    setRaceStarted(false)
    setCountDown(5)
    props.startRace();
    props.giveCompletedWords([])
    console.log('You win!')
  }


  /// stop player from typing prior to start of race
  const isRaceOn = (e) =>{
    if(!raceStarted){
      e.target.value =''
    }
  }

 


  useEffect(() => {
    if (snippetSpace.length === 0 && props.content.content)
    {
      setSnippetSpace(space=>space=props.content.content.trim().split(/[ \t]+/))
      setSnippetProp(snip => snip = props.content.content )
      // document.querySelector('#textInput').value = '';
    }
  })
  
  if (props.content.content) {
    // console.log('snippetSpace', snippetSpace)
    // console.log('split contents', props.content.content.split(' '))
    if (snippetProp != props.content.content){
      setSnippetSpace(space=>space=props.content.content.trim().split(/[ \t]+/))
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
    if (currentWord === "" || currentWord === "\n")
    {
      let finishedWords = [...completedWords , currentWord]
        event.target.value = ''
        setSnippetSpace(remainingWords)
        setCompletedWords(finishedWords)
        props.giveCompletedWords(finishedWords)
    }
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
        let finishedWords = [...completedWords , currentWord]
        event.target.value = ''
        setSnippetSpace(remainingWords)
        setCompletedWords(finishedWords)
        props.giveCompletedWords(finishedWords)
      }
      else {
        event.target.value = wholeWord.trim()
      }
    }
    else{
      props.giveInputValue(wholeWord)
      // update wholeWord

      //update lastInput
    
    }
  
  }

  //establishes start time upon termination of the starting clock 

  const startRace = () => {
    if (startTime === 0) {
    setStartTime(prevTime => Date.now());
    console.log("GO! CURRENT TIME IS",startTime)
    }
    setRaceStarted(raceStarted => raceStarted = true)
    props.startRace();
  }
  

  ///calculates approximate, live wpm
  
  const calculateWPM = (event) =>{
    if(raceStarted){
    let inputLength = completedWords.reduce((acc,curr)=>{
      acc = acc +curr.length
      return acc
    },0);
    let words = inputLength/5;
    let elapsedTime = Date.now()-startTime;
    let minute = 60000
    let wpm = (words*minute)/elapsedTime;
    setWordsPerMinute((wpm.toFixed(2)))
    }
  }

  //turns on the "useinterval custom hook to begin the initial countdown"

  const beginCountdown = () => {
    if(raceStarted || activeCountDown)
    {
      return
    }
    setActiveCountDown(active => active = true)
  
  }



  useInterval(()=>{
    if (activeCountDown){
      console.log(countDown)
      if(countDown>0){
      setCountDown(time => time-1)
      }
      else{
        setActiveCountDown(active => active = false)
        startRace()
      }
    }

  },activeCountDown? 1000 :null)



  let textArea

  if (snippetProp.length) {
    textArea = (<textarea id='textInput' placeholder="Click Here to Start The CODERACE" 
    onFocus ={beginCountdown} 
    onInput={(e)=> { checkForErrors(e);  calculateWPM(e); isRaceOn(e)}} 
    ></textarea>)
  }
  else {
    textArea =  (<textarea id='textInput' placeholder="You need a code snippet to race" disabled></textarea>)
  }

  return (
    <div className='inputContainer'>
      {/* <textarea id='textInput' placeholder="Click Here to Start The CODERACE" 
                onFocus ={startRace} 
                onInput={(e)=> { checkForErrors(e.target.value.slice(-1));  calculateWPM(e)}} 
      ></textarea> */}
      {textArea}

      <p id='currentWPM'>
        {/* Current WPM */}
        current WPM: {wordsPerMinute}
      </p>
  
        < Results content={ props.content } />

    </div>
  )
}

export default InputField;