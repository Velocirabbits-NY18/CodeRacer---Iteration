import React, { Component, useState, useEffect, useRef } from 'react';

const Leaderboard = (props) => {


  return (
    <div>
      <h1>Leaderboard</h1>

      {props.score}

    </div>
  )
}

export default Leaderboard;