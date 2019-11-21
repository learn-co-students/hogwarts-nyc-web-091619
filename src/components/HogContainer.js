import React, {Component} from 'react';
import HogCard from './HogCard'


export default class HogContainer extends Component {

  render() {

    let hogCards = this.props.hogs.map(hog => < HogCard hog={hog} key={hog.name} greased={hog.greased}/>)
    console.log(hogCards)
    
    return (
      <div className = "ui link cards">
      {hogCards}
      </div>

    )
  }
}
