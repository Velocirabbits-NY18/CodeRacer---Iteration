import React, { useState, useEffect } from 'react';

const Results = (props) => {
  // Empty at first
  let resultsDiv = <div></div>;

  // If the user has finished the race (determined by props.finishedWPM existing, passed from InputField)
  if (Object.keys(props.finishedWPM).length) {
    // Show the finished WPM
    resultsDiv = <div id="finishedWPM">{props.finishedWPM.message}</div>;
  }

  // Text is set to empty string if no category is selected
  let explanationText = '';
  // If this prop exists(activated when a category is selected by passing a prop down), show the function of the snippet
  if (props.content.meaning) {
    explanationText = "Your Snippet's Function is:";
  }

  return (
    <div className="resultsContainer">
      <div id="wpmAndScoreContainer">
        {resultsDiv}

        <div id="highScore"></div>
      </div>

      <div id="explanation">
        {explanationText}
        <p id="codeExplanation">
          {/* What the code that you typed does */}
          {props.content.meaning}
        </p>
      </div>
    </div>
  );
};

export default Results;
