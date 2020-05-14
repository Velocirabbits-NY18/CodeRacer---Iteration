import React, { Component, useState, useEffect, useRef } from 'react';

const Leaderboard = (props) => {
  // let scoresArray = [];
  const [ scoresArray, setScoresArray ] = useState([]);
  // const [ divsToRender, setDivsToRender ] = useState([]);
  
  useEffect(() => {
    // console.log("hello, I'm in useEffect in Leaderboard");

    socket.on('newScores', (data) => {
      console.log('score is: ', data);
      console.log('current scoresArray is: ', scoresArray);
      
      setScoresArray(scoresArray => [...scoresArray, 
        <div className="nameAndScoreDiv">
          <p id="leaderboardName"><strong>{data.name}</strong></p>
          <br></br>
          <p id="leaderboardScore">{data.score}</p>
        </div>
      ]);

    //   setDivsToRender(divsToRender => {divsToRender = scoresArray.map(playerScore => {
    //     <div className="nameAndScoreDiv">
    //       <p id="leaderboardName"><strong>{playerScore.name}</strong></p>
    //       <br></br>
    //       <p id="leaderboardScore">{playerScore.score}</p>
    //     </div>
    
    // })})

      // divsToRender = scoresArray.map(playerInfo => {
        //   <div className="nameAndScoreDiv">
        //     <p id="leaderboardName"><strong>{playerInfo.name}</strong></p>
        //     <br></br>
        //     <p id="leaderboardScore">{playerInfo.score}</p>
        //   </div>
        console.log('inside useEffect new scoresArray: ', scoresArray);
    });

      console.log('new scoresArray: ', scoresArray);
    
  }, []);


  return (
    <div className="leaderboardContainer">
      <h2>Leaderboard</h2>

      <div className="nameAndScoreDivs">
        {scoresArray}
      </div>

    </div>
  );
};

export default Leaderboard;
