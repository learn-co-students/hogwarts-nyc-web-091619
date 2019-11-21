import React from 'react'

export default class Tile extends React.Component{

    state = {
        showingDetails: false
    }

    // nameToImg = () => {
    //     return `hog-imgs/${this.props.hog.name.replace(/ /g, "_").toLowerCase()}.jpg`
    // }

    showDetails = () => {
        this.setState({
            showingDetails: !this.state.showingDetails
        })
    }

    removeTile = (e) => {
        if(e.target.className === "ui eight wide column"){
            e.target.style.display = "none"
        }else{
            e.target.parentNode.style.display = "none"
        }
    }

    render(){
        return (
            <div onDrag={this.removeTile} onClick={this.showDetails} className="ui eight wide column" style={{display:"block"}}>
                {/* <img src={this.nameToImg()} alt="hog"/> */}
                <img className="pigGif" src={this.props.hog.gif} alt="hog"/>
                <h1>{this.props.hog.name}</h1>
                {this.state.showingDetails
                ? 
                <div>
                    <h3>Specialty: {this.props.hog.specialty}</h3>
                    <h3>Greased: {this.props.hog.greased? 'yup': 'nope'}</h3>
                    <h3>Weight: {this.props.hog.weight}</h3>
                    <h3>Highest Medal Achieved:{this.props.hog['highest medal achieved']}</h3>
                </div>
                :
                null
                }
            </div>
        )
    }
}