import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Tile from './Tile'

class App extends Component {

  state = {
    // hogs: hogs,
    greased: false
  }

  render() {

    // console.log(this.state.hogs)

    return (
      <div className="App">
          < Nav />
          < Tile hogs={hogs} />
      </div>
    )
  }
}

export default App;
