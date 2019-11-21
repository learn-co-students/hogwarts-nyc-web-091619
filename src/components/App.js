import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Main from './Main'
import hogs from '../porkers_data';
//import { throws } from 'assert';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      hogs: hogs.map(hog => Object.assign({hidden: false}, hog)),
      name: '',
      greasedOnly: false,
      weight: 'all',
      currentGif: Math.floor(Math.random() * props.pigGifs.length),
      pigGifs: props.pigGifs,
    }
  }

  filter = () => {
    let newHogs = hogs.filter(hog => hog.name.includes(this.state.name))
    
    if (this.state.greasedOnly) {
      newHogs = newHogs.filter(hog => hog.greased)
    }
    if (this.state.weight !== 'all') {
      newHogs = newHogs.filter(hog => hog.weight >= this.state.weight && hog.weight < this.state.weight + 1)
    }

    this.setState({hogs: newHogs})
 
  }

  nameFilter = (name) => {
    this.setState({name: name}, this.filter)
  }

  greaseFilter = () => {
    this.setState({greasedOnly: !this.state.greasedOnly}, this.filter)
  }

  weightFilter = (weight) => {
    if (weight !== 'all') {
      weight = parseInt(weight)
    }
    
    this.setState({weight: weight}, this.filter)
  }

  hideHog = (index) =>{
    let newHogs = [...this.state.hogs]
    console.log(newHogs)
    console.log(index)
    newHogs[index].hidden = !newHogs[index].hidden
    this.setState({
      hogs: newHogs
    })
  }
  
  render() {
    return (
      <div className="App">
          < Nav nameFilter={this.nameFilter} greaseFilter={this.greaseFilter} greasedOnly={this.state.greasedOnly} weightFilter={this.weightFilter} currentGif={this.state.currentGif} pigGifs={this.state.pigGifs}/>
          < Main hogs={this.state.hogs} hideHog={this.hideHog} />
      
      </div>
    )
  }
}

export default App;
