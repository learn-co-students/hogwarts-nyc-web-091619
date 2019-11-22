import React from 'react'


export default class HogTile extends React.Component {
    state = {
        details: false
    }

    showDetails = () => {
        this.setState({
            details: !this.state.details
        })
    }

    getImages = () => {
        let fileName = this.props.hog.name.toLowerCase().split(' ').join('_') + '.jpg'
        return require('../hog-imgs/' + fileName ) 
    }

    getHogDetails = () => {
        return ( 
            <div>
                <p>{this.props.hog.specialty}</p>
                <p>{this.props.hog.weight}</p>
                <p>{this.props.hog['highes medal achieved']}</p>
            </div> 
        )
    }


    render() {
        return (
            <div onClick={this.showDetails} className="pigTile">
                <h3> {this.props.hog.name} </h3>
                <img src={this.getImages()} alt=""/>
                {this.state.details ? this.getHogDetails() : null}
            </div>
        )
    }
}