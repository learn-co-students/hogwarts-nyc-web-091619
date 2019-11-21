import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Cards from './Cards'


class App extends Component {

  state = {
    pigs: hogs,
    greased: false
  }

  sortByName= () => {
    // console.log(this.state.pigs)
    let sortedPigs = (this.state.pigs.sort((a, b) => (a.name > b.name) ? 1 : -1))
    // console.log(sortedPigs)
    this.setState({
      pigs: sortedPigs
    })
  }

  sortByWeight = () => {
    let sortedWeight = (this.state.pigs.sort((a, b) => (a.weight < b.weight) ? 1 : -1))
    // console.log(sortedWeight)
    this.setState({
      pigs: sortedWeight
    })
  }



  filterPig = () => {
    this.setState({
      greased: !this.state.greased //! makes the filter reversible to go back to other state
    })
  }

  renderCards = ()=> {
    return this.state.pigs.map((pig)=>{
      let pigName = pig.name
      let imageName = (pigName.toLowerCase().split(' ')).join('_')
      // console.log(imageName)
      let image = require(`../hog-imgs/${imageName}.jpg`)

      return <Cards
        // key="0"
        name={pig.name}
        image={image}
        specialty={pig.specialty}
        greased={pig.greased}
        weight={pig.weight}
        highest_medal_achieved={pig["highest medal achieved"]}
      />
    })
  }

  renderGreasedPigs = () => {
    return this.state.pigs.map((pig) =>{
      if (pig.greased) {
      let pigName = pig.name
      let imageName = (pigName.toLowerCase().split(' ')).join('_')
      // console.log(imageName)
      let image = require(`../hog-imgs/${imageName}.jpg`)

      return <Cards
        // key="0"
        name={pig.name}
        image={image}
        specialty={pig.specialty}
        greased={pig.greased}
        weight={pig.weight}
        highest_medal_achieved={pig["highest medal achieved"]}
      />
      }
    })
  }

  render() {
    return (
      <div className="App">
          < Nav 
          filterPig={this.filterPig}
          sortByName={this.sortByName}
          sortByWeight={this.sortByWeight}

          />
          <br></br><br></br>
            <div className="ui grid container">
            {this.state.greased
            ?
            this.renderGreasedPigs()
            :
            this.renderCards()}
            </div>
      </div>
    )
  }
}

export default App;

//renderCards - pigs key to map through each pig and assign key to the pig object elements(name, specialty, etc)

