import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state = {
    input: ''
  }

  inputChangeHandler = (event) => {
    this.setState({ input: event.target.value })
  }

  deleteCharHandler = (index) => {
    const inputAsArray = this.state.input.split('')
    inputAsArray.splice(index, 1)
    const inputUpdated = inputAsArray.join('')
    this.setState({input: inputUpdated})
  }

  render() {

    const inputAsArray = this.state.input.split('')

    return (
      <div className="App">
        <input type="text" onChange={this.inputChangeHandler} value={this.state.input} />

        <Validation inputLength={this.state.input.length} />
          
        {inputAsArray.map((letter, index) => 
          <Char key={index} letter={letter} click={ () => this.deleteCharHandler(index) } />
        )}

        <p>length: {this.state.input.length}</p>
      </div>
    );
  }
}

export default App;
