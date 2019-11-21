import React from 'react'
import Tile from './Tile'

export default class TilesGrid extends React.Component{
    

    renderTiles = () => {
        if(this.props.filtered){
            let filtered_hogs = this.props.hogs.filter((hog) => hog.greased === true)
            return filtered_hogs.map((hog) => {
                return  <Tile
                key={hog.id}
                hog={hog}
                />
            })
        }else if(this.props.sortedByName){
            let sortedName_hogs = [...this.props.hogs].sort((a, b) => (a.name > b.name) ? 1 : -1)
            return sortedName_hogs.map((hog) => {
                return  <Tile
                key={hog.id}
                hog={hog}
                />
            })

        }else if(this.props.sortedByWeight){
            let sortedWeight_hogs = [...this.props.hogs].sort((a, b) => (a.weight > b.weight) ? 1 : -1)
            return sortedWeight_hogs.map((hog) => {
                return  <Tile
                key={hog.id}
                hog={hog}
                />
            })
        }else{
            return this.props.hogs.map((hog) => {
                return  <Tile
                key={hog.id}
                hog={hog}
                />
            })
        }
    }


    render(){
        return (
            <div className="ui grid container">
                {this.renderTiles()}
            </div>
        )
    }
}