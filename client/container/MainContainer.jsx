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
    }
    this.handleClick = this.handleClick.bind(this)
  }

<<<<<<< HEAD
      <div className='codeSnippetContainer'>
        < CodeSnippet />
      </div>
=======
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
>>>>>>> 72c7af54527d302df5f3ff4e2efab01722081761

<<<<<<< HEAD
      <div className='inputFieldContainer'>
        < InputField />
      </div>
    </div>
  )
=======
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

  // componentDidUpdate() {
  //   console.log('state: ', this.state)
  // }

  render() {
    return (
      <div className='mainContainer'>
        <div className='navBarContainer'>
          < NavBar categories ={ this.state.categories } handleClick={ this.handleClick }/>
        </div>
  
        <div className='codeSnippetContainer'>
          < CodeSnippet content={ this.state.content }/>
        </div>
  
        <div className='inputFieldContainer'>
          < InputField content={ this.state.content }/>
        </div>
  
      </div>
    )
  }
>>>>>>> master
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