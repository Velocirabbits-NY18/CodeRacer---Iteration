/* eslint-disable */ 

import React, { Component, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import NavBar from '../components/NavBar.jsx';
import InputField from '../components/InputField.jsx';
import CodeSnippet from '../components/CodeSnippet.jsx';
import Leaderboard from '../components/Leaderboard.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      content: {},
      currentSnippet: '',
      inputValue: '',
      completedWords: [],
      hasRace: false,
      raceFinished: true,
      name: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.giveInputValue = this.giveInputValue.bind(this);
    this.giveCompletedWords = this.giveCompletedWords.bind(this);
    this.startRace = this.startRace.bind(this);
    this.raceFinished = this.raceFinished.bind(this);
  }

  raceFinished() {
    // console.log("This is our state of the race", this.state.hasRace)
    this.setState({ hasRace: !this.state.hasRace });
  }

  giveInputValue(inputValue) {
    this.setState({ inputValue: inputValue });
  }

  giveCompletedWords(completedWords) {
    this.setState({ completedWords: completedWords });
  }

  startRace() {
    // console.log("This is our state of the race", this.state.hasRace)
    this.setState({ hasRace: !this.state.hasRace });
  }

  // Loads all snippets of the category and randomly chooses one, also has properties other than the actual snippet (its meaning, category, max_time)
  handleClick(endpoint) {
    fetch(`/api/${endpoint}`)
      .then((snippet) => snippet.json())
      // .then(json => console.log(json))
      .then((snippets) => {
        const chosenSnippet =
          snippets[Math.floor(Math.random() * snippets.length)];
        //console.log(chosenSnippet)
        this.setState({ content: chosenSnippet });
      });
  }

  // Shows the categories after the component is mounted
  componentDidMount() {
    console.log(this.state);

    fetch(`/api/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const categoryArray = data.categories.map((element) => {
          return element.category;
        });
        const userName = data.name;
        this.setState({
          categories: categoryArray,
          name: userName,
        });
      });
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="mainTitle"> CODERACER</div>
        <center>
          Hello, <br />
          {Cookies.get('name')}
          <br />
          <br />
        </center>

        <NavBar
          isRaceStarted={this.state.hasRace}
          categories={this.state.categories}
          handleClick={this.handleClick}
        />

        <CodeSnippet
          content={this.state.content}
          inputValue={this.state.inputValue}
          completedWords={this.state.completedWords}
        />

        <div className="inputAndLeaderboardBox">
          <InputField
            content={this.state.content}
            giveCompletedWords={this.giveCompletedWords}
            giveInputValue={this.giveInputValue}
            startRace={this.startRace}
            name={this.state.name}
          />

          <Leaderboard />
        </div>
 
      </div>
    );
  }
}

export default MainContainer;
