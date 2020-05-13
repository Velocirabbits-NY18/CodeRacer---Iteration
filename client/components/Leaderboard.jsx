import React, { Component, useState, useEffect, useRef } from 'react';

const Leaderboard = (props) => {
  // let scoresArray = [];
  const [ scoresArray, setScoresArray ] = useState([]);

  // let renderedItems = [];
  //   scoresArray.forEach(el => {
  //     renderedItems.push(
  //       <div className="nameAndScoreDiv">
  //       <p>{el.name}</p>
  //       <p>{el.score}</p>
  //       </div>
  //     )
  //   })
  
  useEffect(() => {
    // console.log("hello, I'm in useEffect in Leaderboard");

    socket.on('newScores', (data) => {
      console.log('score is: ', data);
      // setScoresArray[...scoresArray, DATA-TO-INSERT]
      // setScoresArray(scoresArray.push(
      //   [data.name, data.score]
        // <div className="nameAndScoreDiv">
        //   <p>{data.name}</p>
        //   <p>{data.score}</p>
        // </div>
      // ));
      // console.log(scoresArray);
    });
    // console.log('inside useEffect - scoresArray: ', scoresArray);
  }, []);

  // // console.log('outside useEffect - scoresArray: ', scoresArray);

  return (
    <div className="leaderboardContainer">
      <h2>Leaderboard</h2>

      <div className="nameAndScoreDivs">
        {/* {scoresArray} */}
      </div>

    </div>
  );
};

export default Leaderboard;
