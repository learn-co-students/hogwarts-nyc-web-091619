import React, { Component } from 'react';

import GreaseFilter from './GreaseFilter';
import NameSort from './NameSort';
import WeightSort from './WeightSort';

export class FiltersContainer extends Component {
  render() {
    return (
      <div>
        <GreaseFilter hogs={this.props.hogs} setHogs={this.props.setHogs} />
        <NameSort hogs={this.props.hogs} setHogs={this.props.setHogs} />
        <WeightSort hogs={this.props.hogs} setHogs={this.props.setHogs} />
      </div>
    );
  }
}

export default FiltersContainer;
