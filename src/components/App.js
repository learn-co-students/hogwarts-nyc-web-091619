import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Filter from './Filter'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs
    }
  }

  handleFilter = ()=>{
    
    let filtered = hogs.filter(hog => hog.greased === true )
    
    
    this.setState({
      hogs: filtered
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter handleFilter={this.handleFilter}/>
          < HogContainer
            hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
