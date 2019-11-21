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

  sortByName = () => {
    let sortedNames = hogs.sort((a, b) => a.name.localeCompare(b.name))
  
    this.setState({
      hogs: sortedNames
    })
    
  }
  sortByWeight = () => {
    let sortedWeight = hogs.sort((a, b) => a.weight - b.weight)
  
    this.setState({
      hogs: sortedWeight
    })
    
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter handleFilter={this.handleFilter} sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
          <br/>
          < HogContainer
            hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
