import piggy from '../porco.png'
import React from 'react'

export default class Nav extends React.Component{

	filterGreased = (e) => {
		if(e.target.innerText === "Filter Greased"){
			e.target.innerText = "Unfilter Greased"
		}else{
			e.target.innerText = "Filter Greased"
		}
		this.props.changeFilterState()
	}

	sortByName = (e) => {
		if(e.target.innerText === "Sort Name"){
			e.target.innerText = "Unsort Name"
		}else{
			e.target.innerText = "Sort Name"
		}
		this.props.sortByName()
	}

	sortByWeight = (e) => {
		if(e.target.innerText === "Sort Weight"){
			e.target.innerText = "Unsort Weight"
		}else{
			e.target.innerText = "Sort Weight"
		}
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

