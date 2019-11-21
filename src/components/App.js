import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TilesGrid from './TilesGrid';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

class App extends Component {
  
  state = {
    filtered: false,
    sortedByName: false,
    sortedByWeight: false,
    contentLoaded: false
  }

  
changeFilterState = () => {
  this.setState({
    ...this.state,
    filtered: !this.state.filtered
  })
}

sortByName = () => {
  this.setState({
    ...this.state,
    sortedByName: !this.state.sortedByName
  })
}

sortByWeight = () => {
  this.setState({
    ...this.state,
    sortedByWeight: !this.state.sortedByWeight
  })
}

fetchPigs = () => {
  let counter = 0
  fetch(`http://api.giphy.com/v1/gifs/search?q=pig&api_key=${API_KEY}&limit=13`)
  .then(resp => resp.json())
  .then(json => json.data.forEach((pigGIF) => {
    hogs[counter].gif = pigGIF.images.downsized_large.url
    counter++
  }))
  .then(() => {
    this.setState({
      ...this.state,
      contentLoaded: true
    })
  })
}

  render() {
    return (
      this.state.contentLoaded ?
      <div className="App">
          < Nav 
            changeFilterState={this.changeFilterState}
            sortByName={this.sortByName}
            sortByWeight={this.sortByWeight}
            />
          <TilesGrid 
            hogs={hogs} 
            filtered={this.state.filtered}
            sortedByName={this.state.sortedByName}
            sortedByWeight={this.state.sortedByWeight}
          />
      </div>
      :
      <div> Content is loading! Wait bitch! {this.fetchPigs()}</div>
    )
  }
}

export default App;
