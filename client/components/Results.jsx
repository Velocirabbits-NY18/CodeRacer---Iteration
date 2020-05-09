import React, { Component, useState, useEffect } from 'react';

const Results = props => {
  
  const getHighScore = () => {
    
  }
  
  return (
    <div className='resultsContainer'>

      <div id='wpmAndScoreContainer'>

        <div id='finishedWPM'>
          <p id="finishedWPMnumber">
            {/* WPM upon completion */}
            120
          </p>
        </div>

        <div id='highScore'>
          <p id='highScoreNumber'>
            {/* HIGH SCORE */}
          </p>
        </div>

      </div>

      <div id='explanation'>
        <p id='codeExplanation'>
          {/* What the code that you typed does */}
         { props.content.meaning }
        </p>
      </div>

    </div>
  )
}




export default Results;