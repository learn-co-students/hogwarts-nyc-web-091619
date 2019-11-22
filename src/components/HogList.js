import React from 'react'
import HogTile from './HogTile'

export default class HogList extends React.Component {
    

    showHogs = () => {
        return this.props.hogs.map(hog => {
            return <HogTile hog={hog} key={hog.name}/>
        })
    }

    

    render() {
    
        return (
            <div className="ui grid container">
                {this.showHogs()}
            </div>
        )
    }
}