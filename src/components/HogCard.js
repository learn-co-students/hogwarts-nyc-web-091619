import React, {Component} from 'react';

export default class HogCard extends Component {

  constructor(props){
    super(props)
    this.state = {
      showDetails: false,
    }
  }

  getImgPath(name){
    let hogName = name.toLowerCase().split(' ').join('_')
    console.log(hogName)
       return require(`../hog-imgs/${hogName}.jpg`)
      
  }
   
     clickHandler = (e) => {
       if(this.state.showDetails === false){
            this.setState({
                showDetails: true
        })} else {
            this.setState({
                showDetails: false
            })
        }
       }

       isGreased = () => {
           if (this.props.hog.greased === true){
            return 'FAT'
           } else {
             return 'Skinny baby!!!'
           }
       }

    render() {
         return (
              <div onClick = {this.clickHandler} className = "ui card">
            <h1>{this.props.hog.name}</h1>
            <img src={this.getImgPath(this.props.hog.name)} alt=''/>
            {this.state.showDetails?
              <div>
            <h4>Specialty:{this.props.hog.specialty}</h4>
            <h5>{this.isGreased()}</h5>
            <h6>Weight:{this.props.hog.weight}</h6>
            <h7>Medal:{this.props.hog['highest medal achieved']}</h7>
             </div>
            : 
                null
        }
        </div>
    )}

}