//import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	
	const handleNameChange = (e) => {
		props.nameFilter(e.target.value)
	}

	const greaseClicked = (e) => {
		props.greaseFilter()
	}

	const weightFilter = (e) => {
		props.weightFilter(e.target.value)
	}

	return (
		<div className="navWrapper">
			<input type="text" placeholder="Search by name" onChange={handleNameChange} />
			<button onClick={greaseClicked}>{props.greasedOnly ? 'Show All' : 'Show Greased Pigs Only'}</button>
			<label>Filter by weight:</label>
			<select onChange={weightFilter}>
				<option value='all'>Show all</option>
				<option value='0'>0 - 0.9</option>
				<option value='1'>1 - 1.9</option>
				<option value='2'>2 - 2.9</option>
				<option value='3'>3 - 4.9</option>
				<option value='4'>4 - 4.9</option>
				<option value='5'>5+</option>
			</select>
			<br/><br/>
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={props.pigGifs[props.currentGif].images.original.url} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
		</div>
	)
}

export default Nav
