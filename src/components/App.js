import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog'
import HogsBrower from './HogsBrower'

class App extends Component {

  state={
    hogs: hogs
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < HogsBrower
            hogs={this.state.hogs}
            // specialty={hog.specialty}
            // greased={hog.greased}
            // weight={hog.weight}
            />
      </div>
    )
  }
}

export default App;
