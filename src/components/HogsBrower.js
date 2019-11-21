import React from 'react'
import Hog from './Hog'
class HogsBrower extends React.Component{
    renderHogs = ()=>{
        console.log(this.props.hogs)
        return this.props.hogs.map(hog=>{
          return <Hog hog={hog} />
        })
    }

    render(){
        return (
                <div className="ui link cards">
                    {this.renderHogs()}
                </div>
        )
    }
}
export default HogsBrower