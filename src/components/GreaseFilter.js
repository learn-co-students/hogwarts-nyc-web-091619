import React, { Component } from 'react';

export class GreaseFilter extends Component {
  state = {
    hogs: this.props.hogs,
    filtered: false,
  };

  clickHandler = () => {
    const filteredHogs = this.props.hogs.filter(hog => hog.greased);
    {
      this.state.filtered
        ? this.props.setHogs(this.state.hogs)
        : this.props.setHogs(filteredHogs);
    }
    this.setState(prevState => ({ filtered: !prevState.filtered }));
  };

  render() {
    return (
      <button onClick={this.clickHandler}>
        {this.state.filtered ? 'Show All' : 'Show Only Greased'}
      </button>
    );
  }
}

export default GreaseFilter;
