import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
				<button>Sort Hogs</button>
				<button onClick={props.filterNames}>Greased</button>
				<button>Weight</button>
			</div>
		</div>
	)
}

export default Nav
