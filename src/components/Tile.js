import React from 'react';
import HogImg from '../HogImgList';

class Tile extends React.Component {

    nameFormat = (name) => {
        return name.replace(/\s/g, '_').toLowerCase()
    }

    // findHogImg = (formattedName) => {
        
    // }

    render () {

        console.log(this.nameFormat('Flexington Steel Kavorkian'))

        return (
            <div className="ui grid container">

            {this.props.hogs.map((hog, idx)=> {
                let picture = require(`../hog-imgs/${this.nameFormat(hog.name)}.jpg`)
            return <div key={idx} className="ui eight wide column">
                        <div className="pigTile"> 
                        {hog.name} <br/>
                        <img src={picture}></img>
                        </div>
                    </div>
            })}

            </div>
        )
    }
}

export default Tile;