import React from 'react'



class Cards extends React.Component{

state = {
    clicked: false,
    hidden: false

}

showPigInfo = ()=> {
    this.setState({
        clicked: !this.state.clicked
    })
}

hideButton = () => {
  this.setState({
      hidden: !this.state.hidden
  })
}


renderPigInfo = () => {
    return(
        <div hidden={this.state.hidden} className="ui_eight_wide_column">
            <button onClick={this.hideButton}>Hide Me, Don't Eat Me</button>
            <h3>{this.props.name}</h3>
            <img src={this.props.image}/>
            <h4>{this.props.specialty}</h4>
            <h4>{this.props.greased}</h4>
            <h4>Weight: {this.props.weight}</h4>
            <h4>Highest Medal Achieved:{this.props.highest_medal_achieved}</h4>

        </div>

    )
}

renderPartialPigInfo = () => {
    return(
        <div hidden={this.state.hidden} onClick={this.showPigInfo} className="ui_eight_wide_column">
            <button onClick={this.hideButton}>Hide Me, Don't Eat Me</button>
            <h3>{this.props.name}</h3>
            <img src={this.props.image}/>
        </div>

    )
}

render(props){
   return (this.state.clicked === false)
   ?
   this.renderPartialPigInfo()
   :
   this.renderPigInfo()

}//end of render




}


export default Cards;

//get pigTile from the App.css file to give div ClassName
//when return pig info - youre calling the key