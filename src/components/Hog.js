import React from 'react'

class Hogs extends React.Component{

    render(){
        return (
            <div className="ui card">
                <h1>{this.props.hog.name}</h1>
            </div>
        )
    }
}
export default Hogs