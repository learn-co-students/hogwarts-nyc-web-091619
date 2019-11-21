import React from 'react';
// import HogImg from '../HogImgList';
// import { NONAME } from 'dns';

class Tile extends React.Component {



    nameFormat = (name) => {
        return name.replace(/\s/g, '_').toLowerCase()
    }

    clickHandler = (e) => {
        const parentNode = e.target.parentNode
        // parentNode.getElementsByClassName('hogDetails')[0].style.display = ''
        parentNode.getElementsByClassName('hogDetails')[0].style.display === 'none'
        ?
        parentNode.getElementsByClassName('hogDetails')[0].style.display = 'block'
        :
        parentNode.getElementsByClassName('hogDetails')[0].style.display = 'none'
    }
    

    render () {

        // console.log(this.props)

        return (
            <div className="ui grid container">

            {this.props.hogs.map((hog, idx)=> {
                let picture = require(`../hog-imgs/${this.nameFormat(hog.name)}.jpg`)
            return <div className="ui eight wide column" id={idx}>
                        <div className="pigTile" onClick={this.clickHandler}> 
                        {hog.name} <br/>
                        <img src={picture}></img>
                        <ul className='hogDetails' style={ {display: 'none'} }>
                            <li>Specialty: {hog.specialty}</li>
                            <li>Greased: {hog.greased}</li>
                            <li>Weight: {hog.weight}</li>
                            <li>Highest Medal Achieved: {hog['highest medal achieved']}</li>
                        </ul>
                        </div>
                    </div>
            })}

            </div>
        )
    }
}

export default Tile;