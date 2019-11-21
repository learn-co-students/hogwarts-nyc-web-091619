import React, { Component } from 'react';

export class WeightSort extends Component {
  changeHandler = e => {
    let sortedHogs;
    switch (e.target.value) {
      case 'asc':
        sortedHogs = this.props.hogs.sort((hog1, hog2) =>
          hog1.weight > hog2.weight ? 1 : -1,
        );
        this.props.setHogs(sortedHogs);
        break;
      case 'dsc':
        sortedHogs = this.props.hogs.sort((hog1, hog2) =>
          hog1.weight > hog2.weight ? -1 : 1,
        );
        this.props.setHogs(sortedHogs);
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <select onChange={this.changeHandler}>
        <option disabled selected>
          Sort By Weight
        </option>
        <option value="asc">Ascending</option>
        <option value="dsc">Descending</option>
      </select>
    );
  }
}

export default WeightSort;
