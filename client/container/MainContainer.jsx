import React, { Component, useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx';
import InputField from '../components/InputField.jsx';
import CodeSnippet from '../components/CodeSnippet.jsx';

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
    fetch(`/api/`)
      .then((category) => category.json())
      .then((response) => {
        const categoryArray = response.map((element) => {
          return element.category;
        });
        this.setState({ categories: categoryArray });
      });
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="mainTitle"> CODERACER</div>

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

        <InputField
          content={this.state.content}
          giveCompletedWords={this.giveCompletedWords}
          giveInputValue={this.giveInputValue}
          startRace={this.startRace}
        />
      </div>
    );
  }
}

export default MainContainer;
