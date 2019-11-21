import React, { Component } from 'react';

export class NameSort extends Component {
  changeHandler = e => {
    let sortedHogs;
    switch (e.target.value) {
      case 'asc':
        sortedHogs = this.props.hogs.sort((hog1, hog2) =>
          hog1.name > hog2.name ? 1 : -1,
        );
        this.props.setHogs(sortedHogs);
        break;
      case 'dsc':
        sortedHogs = this.props.hogs.sort((hog1, hog2) =>
          hog1.name > hog2.name ? -1 : 1,
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
          Sort By Name
        </option>
        <option value="asc">Ascending</option>
        <option value="dsc">Descending</option>
      </select>
    );
  }
}

export default NameSort;
