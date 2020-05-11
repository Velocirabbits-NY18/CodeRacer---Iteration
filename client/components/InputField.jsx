import React, { Component, useState, useEffect, useRef } from 'react';
import Results from './Results.jsx'


// calculatewpm = (typedCharacters/5) / endTime-startTime          *          60seconds / endTime-startTime

//we have content, we know what the string that we are checking
// have a pointer of some sort? State?  and if content[pointer] === e.target.value pointer ++ and if wrong
// make sure you have to correct your mistake before being allowed to keep going.

// need to reset letterpointer if we choose to choose a new subject, mid-type or we prevent changing stuff when we start the current snippet



const InputField = props => {
  const [letterPointer, setLetterPointer] = useState(0);
  const [wordPointer, setWordPointer] = useState(0);
  const [wordsTyped, setWordsTyped] = useState('');
  const [fullString, setFullString] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0)
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
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

  /// stop player from typing prior to start of race
  const isRaceOn = (e) =>{
    if(!raceStarted){
      e.target.value =''
    }
  }


    // type checking logic


  const checkForErrors = (letter) => {
    let letterSplit = props.content.content.split('');
    let wordArray = props.content.content.split(' ');
    
    if (letter === letterSplit[letterPointer]) {
      setWordsTyped(prevString => prevString += letter);
      setLetterPointer(prevCount => prevCount + 1);
      if (letterPointer === letterSplit.length - 1) {
        setLetterPointer(prevCount => prevCount = 0);
      }
    } else {
      
    }
    console.log('words typed', wordsTyped);
    // console.log('currentletter', letter);
    console.log('split letters', letterSplit);
    // console.log('word array', wordArray);
    console.log('letterPointer', letterPointer);
  }

  //establishes start time upon termination of the starting clock 

  const startRace = () => {
    if (startTime === 0) {
    setStartTime(prevTime => Date.now());
    console.log("GO! CURRENT TIME IS",startTime)
    }
    setRaceStarted(raceStarted => raceStarted = true)
  }
  

  ///calculates approximate, live wpm
  
  const calculateWPM = (event) =>{
    if(raceStarted){
    let inputLength = event.target.value.length;
    let words = inputLength/5;
    let elapsedTime = Date.now()-startTime;
    let minute = 60000
    let wpm = (words*minute)/elapsedTime;
    setWordsPerMinute(prevWPM => prevWPM = (wpm.toFixed(2)))
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

  if(props.content.content){
    textArea = (<textarea id='textInput' placeholder="Click Here to Start The CODERACE" 
    onFocus ={beginCountdown} 
    onInput={(e)=> { checkForErrors(e.target.value.slice(-1));  calculateWPM(e); isRaceOn(e)}} 
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








// class InputField extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       splitContent: [],
//       input: '',
//       pointer: 0,
//     };
//     this.checkForErrors = this.checkForErrors.bind(this)
//     this.pointer = 0;
//   }

//   checkForErrors(letter) {
//     const split = this.props.content.content.split('');
//     const split2 = this.props.content.content.split(' ')
//     this.setState({ splitContent: split })
//     const inputArray = '';
//     // if (letter == this.state.splitContent[this.state.pointer] ) {
//     //   this.setState({ pointer: this.state.pointer++ })
//     //   this.setState({ input: this.state.input += letter })
//     // }
//     if (letter == split[this.pointer]) {
//       // this.setState({ pointer: this.state.pointer++ })
//       this.pointer += 1;
//       // this.setState({ input: this.state.input += letter })
//     }
//     // console.log(this.state.input)
//     console.log(letter)
//     console.log(split)
//     console.log(split2)
//     console.log(this.pointer)
//     // console.log(this.state.pointer)
//   }

//   render() {
//     console.log('state', this.props.content.content)
//     return (
//       <div className='inputContainer'>
//         {/* <input id='textInput' type='textbox' placeholder="This is where people type stuff" onInput={(e)=> (console.log(e.target.value.slice(-1)))} ></input> */}
//         {/* <textarea id='textInput' placeholder="This is where people type stuff" onInput={(e)=> (console.log(e.target.value.slice(-1)))}></textarea> */}
//         <textarea id='textInput' placeholder="This is where people type stuff" onInput={(e)=> (this.checkForErrors(e.target.value.slice(-1)))} ></textarea>
//         <p id='currentWPM'>
//           {/* Current WPM */}
//           95
//         </p>
        
//           < Results content={ this.props.content }/>
  
//       </div>
//     )
//   }
// }


export default InputField;