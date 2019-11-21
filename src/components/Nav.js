import piggy from '../porco.png'
import React from 'react'

export default class Nav extends React.Component{

	filterGreased = () => {
		this.props.changeFilterState()
	}

	sortByName = () => {
		this.props.sortByName()
	}

	sortByWeight = () => {
		this.props.sortByWeight()
	}

	render(){
		return (
			<div className="navWrapper">
				<button onClick={this.filterGreased}>Filter Greased</button>
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<img src={piggy} className="App-logo" alt="piggy" />
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
				<button onClick={this.sortByName}>Sort Name</button>
				<button onClick={this.sortByWeight}>Sort Weight</button>
			</div>
		)
	}
}

