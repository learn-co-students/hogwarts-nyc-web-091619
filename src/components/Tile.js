import React from 'react';

class Tile extends React.Component {



    render () {

        // console.log(typeof(this.props.hogs))
        // console.log(this.props.hogs.hogs)
        console.log(this.props.hogs)

        return (
            <div className="ui grid container">
            {this.props.hogs.map((hog, idx)=> {
                return <div key={idx} className="ui eight wide column">
                    <div className="pigTile"> {hog.name} </div>
                    </div>
            })}
            </div>
        )
    }
}

export default Tile;