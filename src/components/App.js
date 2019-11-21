import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import Body from './Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Body className="" />
      </div>
    );
  }
}

export default App;
