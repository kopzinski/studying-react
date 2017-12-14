import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    username: 'joselito'
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const bolinhas = {
      backgroundColor: '#ccc'
    }
    return (
      <div className="App">
        <div style={bolinhas}>
          <UserInput changed={this.usernameChangeHandler} 
            currentName={this.state.username} />
          <UserOutput username={this.state.username} />
        </div>
      </div>
    );
  }
}

export default App;
