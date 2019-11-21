import React, {Component} from 'react';


export default class Filter extends Component {

    render() {
        return (
            <div>
                <h3>Sort by</h3>
                <button>by name</button>
                <button> weight</button>  
                <h3>Filter by</h3>            
                <button>grease</button>
                <br/>
            </div>
        )

    }
}