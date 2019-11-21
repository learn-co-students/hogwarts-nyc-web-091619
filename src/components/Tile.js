import React from 'react';
import {Card, Button, Image, Icon} from 'semantic-ui-react'

export default class Tile extends React.Component{

    state = {
        image: require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/\s/g, "_")}.jpg`),
        expanded: false
    }

    clickHandler = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    handleHide = () => {
        this.props.hideHog(this.props.index)
    }

    render(){
        return (
            <Card>
                <Card.Content textAlign="center">
                    { this.props.hog.hidden 
                    ? 
                        <button onClick={this.handleHide}>Unhide {this.props.hog.name}</button>
                    :
                        <div>
                            <Image onClick={this.clickHandler} src={this.state.image} alt="THIS IS A PIGGY"/>
                            <Card.Header>{this.props.hog.name}</Card.Header>
                            <Icon name={this.props.hog.greased ? 'mix' : 'bath'}/>
                            { this.state.expanded 
                                ? 
                                <div>
                                    <h4>Specialty: {this.props.hog.specialty}</h4>
                                    <h4>Weight: {this.props.hog.weight}</h4>
                                    <h4>Highest Achievement: {this.props.hog['highest medal achieved']}</h4>
                                </div>
                                :
                                <h5>Click Image To Expand</h5>
                            }
                            <button onClick={this.handleHide}>Hide This Hog</button>
                        </div>
                    }
                </Card.Content>
            </Card>
        )
    }
  
}

{/* <div className="ui eight wide column">
                { this.props.hog.hidden 
                ? 
                    <button onClick={this.handleHide}>Unhide {this.props.hog.name}</button>
                :
                    <div>
                        <div className="pigTile">
                            <h3>{this.props.hog.name}{this.props.hog.greased ? ' ☢️' : ' 🛁'}</h3>
                            <img onClick={this.clickHandler} className="image" src={this.state.image} alt="THIS IS A PIGGY"/>
                            { this.state.expanded 
                                ? 
                                <div>
                                    <h4>Specialty: {this.props.hog.specialty}</h4>
                                    <h4>Weight: {this.props.hog.weight}</h4>
                                    <h4>Highest Achievement: {this.props.hog['highest medal achieved']}</h4>
                                </div>
                                :
                                <h5>Click Image To Expand</h5>
                            }
                        <button onClick={this.handleHide}>Hide This Hog</button>
                        </div>
                    </div>
                }
            </div> */}

