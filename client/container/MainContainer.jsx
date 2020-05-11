import React, { Component, useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx'
import InputField from '../components/InputField.jsx'
import CodeSnippet from '../components/CodeSnippet.jsx'



class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      content: {},
      currentSnippet: '',
      inputValue : '',
      completedWords: [],
      startRace: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.giveInputValue = this.giveInputValue.bind(this)
    this.giveCompletedWords = this.giveCompletedWords.bind(this)
    this.startRace = this.startRace.bind(this)
  }


  giveInputValue(inputValue){
    this.setState({inputValue: inputValue})
  }

  giveCompletedWords(completedWords){
    this.setState({completedWords: completedWords})
  }

  startRace(){
    this.setState({startRace: !this.state.startRace})
  }


  handleClick(endpoint) {
    fetch(`/api/${endpoint}`)
      .then(snippet => snippet.json())
      // .then(json => console.log(json))
      .then(snippets => {
        const chosenSnippet = snippets[Math.floor(Math.random() * snippets.length)];
        //console.log(chosenSnippet)
        this.setState({ content: chosenSnippet })
      })
  }

  componentDidMount() {
    fetch(`/api/`)
      .then(category => category.json())
      .then(response => {
        const categoryArray = response.map(element => {
          return element.category
        });
        this.setState({ categories: categoryArray })
      })
  }

  render() {
    return (
      <div className='mainContainer'>
        <div className="mainTitle"> CODERACER</div>

          < NavBar categories ={ this.state.categories } handleClick={ this.handleClick }/>
   
  
          < CodeSnippet content={ this.state.content } inputValue = {this.state.inputValue} completedWords = {this.state.completedWords}/>
  
          < InputField content={ this.state.content } giveCompletedWords = {this.giveCompletedWords} giveInputValue = {this.giveInputValue} startRace = {this.startRace}/>
 
  
      </div>
    )
  }
}








// const MainContainer = () => {

//   [categories, setCategories] = useState();

//   const handleClick = (endpoint) => {
//     fetch(`/api/${endpoint}`)
//       .then(snippet => console.log(snippet))
//       // .then()
//   }

//   useEffect(() => {
//     fetch(`/api/category`)
//       .then(category => console.log('categories', category))
//       .then(setCategories())
//   })

//   return (
//     <div className='mainContainer'>
//       <div className='navBarContainer'>
//         < NavBar categories ={[]} handleClick={ handleClick }/>
//       </div>

//       <div className='codeSnippetContainer'>
//         < CodeSnippet />
//       </div>

//       <div className='inputFieldContainer'>
//         < InputField />
//       </div>

//     </div>
//   )
// }

export default MainContainer;