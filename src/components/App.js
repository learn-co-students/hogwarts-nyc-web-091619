import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'

class App extends Component {

  state = {
    filter: 'all',
    sortedValue: 'all'
  }

  renderHogs = () => {
    let filteredHogs
    switch(this.state.filter) {
      case 'greased':
        filteredHogs = hogs.filter(hog => hog.greased)
        break;
      case 'not greased':
        filteredHogs = hogs.filter(hog => !hog.greased)
        break;
      default:
        filteredHogs = hogs
        break;

    }
    
    let sortedHogs;
    switch(this.state.sortedValue) {
      case 'weight':
        sortedHogs = [...filteredHogs].sort((hogA, hogB) => hogA.weight - hogB.weight)
        break;
      case 'name':
          sortedHogs = [...filteredHogs].sort((hogA, hogB) => {
            if (hogA.name > hogB.name) {
              return 1
            } else if (hogA.name < hogB.name) {
              return -1
            } else {
              return 0
            }
          })
          break;
      default:
        sortedHogs = filteredHogs
        break;
    }
    return sortedHogs
  }//end render Hogs

  applyFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  displaySort = (e) => {
    this.setState({
      sortedValue: e.target.value
    })
  } 

  render() {
    return (
      <div className="App">
          < Nav applyFilter={this.applyFilter} displaySort={this.displaySort}/>
          < HogList hogs={this.renderHogs()}/>
      </div>
    )
  }
}

export default App;



