import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Tile from './Tile'

class App extends Component {

  state = {
    hogs: hogs
  }

  sortByGreased = () => {
    const greased = this.state.hogs.filter( pig => pig.greased === true )
    // onst greased = pigdata.filter(pig => pig.greased===true);
    this.setState({
      hogs: greased
    })
  }

  sortByWeight = () => {
    // const name = this.state.hogs.sort( hog => hog.name)
    const weight = this.state.hogs.sort((a, b) => a.weight > b.weight ? 1 : -1 )

    this.setState({
      hogs: weight
    })
  }

  sortByName = () => {
    const name = this.state.hogs.sort((a, b) => a.name > b.name ? 1 : -1 )

    this.setState({
      hogs: name
    })
  }

  render() {
    console.log(this.state.hogs.sort((a, b) => a.name > b.name ? 1 : -1 ))

    return (
      <div className="App">
          < Nav filterGreased={this.sortByGreased} filterName={sortByName} filterWeight={sortByWeight} />
          < Tile hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
