/* eslint-disable */

import React, { Component, useState, useEffect, useRef } from 'react';

const Leaderboard = (props) => {
  const [scoresArray, setScoresArray] = useState([]);
  const [divsToRender, setDivsToRender] = useState([]);
  
  useEffect(() => {

    socket.on('newScores', (data) => {
      console.log('score is: ', data);
      
      setScoresArray(scoresArray => {
        const newScoresArray = [...scoresArray, data];
        
        setDivsToRender(divsToRender => {
          divsToRender = newScoresArray
              .sort((a, b) => b.score - a.score)
              .map(playerScore => {
                return (<div className="nameAndScoreDiv">
                  <p id="leaderboardName"><strong>{playerScore.name}</strong></p>
                  <br></br>
                  <p id="leaderboardScore">{playerScore.score}</p>
                </div>)
          })
          return divsToRender;    
        })

        return [...scoresArray, data]
      });
    });
    
  }, []);


  return (
    <div className="leaderboardContainer">
      <h2>Leaderboard</h2>

      <div className="nameAndScoreDivs">
        {divsToRender}
      </div>

    </div>
  );
};

export default Leaderboard;
