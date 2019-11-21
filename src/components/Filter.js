import React, {Component} from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div>
                <h3>Sort by</h3>
                <button onClick={this.props.sortByName}>by name</button>
                <button onClick={this.props.sortByWeight}> weight</button>  
                <h3>Filter by</h3>            
                <button onClick={this.props.handleFilter}>grease</button>
                <br/>
            </div>
        )
    }
}