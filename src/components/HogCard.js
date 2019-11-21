import React, {Component} from 'react';


export default class HogCard extends Component {

  constructor(props){
    super(props)
    this.state = {
      showDetails: false
    }
  }
  render() {
    return (
      <div className = "ui card">
        <h1>{this.props.hog.name}</h1>
        </div>
    )}

}