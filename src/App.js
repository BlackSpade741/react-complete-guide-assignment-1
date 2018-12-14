import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames : ['Ellen', 'Reece']
  };

  usernameChangedHandler = (event) => {
    this.setState({
      usernames: [event.target.value, 'Reece']
    })
  };

  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChangedHandler} initialValue={this.state.usernames[0]}></UserInput>
        <UserOutput username={this.state.usernames[0]}></UserOutput>
      </div>
    );
  }
}

export default App;
