import React, { Component } from 'react';
import TileContainer from './TileContainer';

export default class Main extends Component {
  render() {
    return (
      <div>
        < TileContainer hogs={this.props.hogs} hideHog={this.props.hideHog} /> 
      </div>
    )
  }
}


