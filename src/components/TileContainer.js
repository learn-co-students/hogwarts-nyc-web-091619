import React from 'react';
import Tile from './Tile';
import {Card} from 'semantic-ui-react'

export default function TileContainer(props){

    const renderHogs = () => {
        return props.hogs.map((hog, index) => < Tile hog={hog} key={hog.name} index={index} hideHog={props.hideHog}/> )
    }

    return (
      <Card.Group itemsPerRow={3}>
          {renderHogs()}
      </Card.Group>
    )
  
}
