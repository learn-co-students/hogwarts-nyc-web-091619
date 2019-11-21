import React, { Component } from 'react';
import HogCard from './HogCard';
import FiltersContainer from './FiltersContainer';

import hogs from '../porkers_data';

export class Body extends Component {
  state = {
    displayedHogs: hogs,
  };

  renderPigs = () => {
    return this.state.displayedHogs.map(hog => {
      return <HogCard className="ui card" hog={hog} />;
    });
  };

  setHogs = hogs => {
    // return hogs
    this.setState({
      displayedHogs: hogs,
    });
  };

  render() {
    return (
      <div>
        <FiltersContainer
          hogs={this.state.displayedHogs}
          setHogs={this.setHogs}
        />
        <br></br>
        <div className="ui centered cards">{this.renderPigs()}</div>;
      </div>
    );
  }
}

export default Body;
