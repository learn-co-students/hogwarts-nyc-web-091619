import React, { Component } from 'react';

// import hog_images from '../hog-imgs';

export class HogCard extends Component {
  state = {
    displayPic: true,
  };

  clickHandler = () => {
    console.log('clicking');
    this.setState(prevState => ({
      displayPic: !prevState.displayPic,
    }));
  };

  hideHandler = e => {
    e.stopPropagation();
    let parentCard = e.target.parentNode.parentNode;
    console.log(parentCard);
    parentCard.style.display = 'none';
  };

  hogImage = () => {
    let formattedName = this.props.hog.name
      .split(' ')
      .join('_')
      .toLowerCase();
    let pic = require(`../hog-imgs/${formattedName}.jpg`);
    return pic;
  };

  render() {
    return (
      <div className="card" onClick={this.clickHandler}>
        <div className="content">
          <div className="header">{this.props.hog.name}</div>
          {this.state.displayPic ? (
            <div className="image">
              <img src={this.hogImage()} />
            </div>
          ) : (
            <div className="description">
              <div className="meta">{this.props.hog.greased ? '🛢' : '🐽'}</div>
              <div className="meta">{this.props.hog.specialty}</div>
            </div>
          )}
          <button onClick={this.hideHandler}>Hide this card</button>
        </div>
      </div>
    );
  }
}

export default HogCard;
