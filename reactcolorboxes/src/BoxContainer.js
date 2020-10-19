import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css'

export class BoxContainer extends Component {
  static defaultProps = {
    numBoxes:  18,
    allColors: [
      'red' , 
      'brown' , 
      'cyan' , 
      'Aquamarine',
      'AntiqueWhite',
      'Aqua',
      'AliceBlue',
      'Black',
      'Brown',
      'Chocolate',
      'Crimson',
      'Cornsilk',
      'DarkGray',
      'DeepPink',
      'Gainsboro',
      'FireBrick',
      'DodgerBlue',
      'Lavender',
      'LightCoral',
      'LightGreen',
      'LightPink',
      'Khaki',
      'LightSeaGreen',
      'LightSlateGrey',
      'Limegreen',
      'MidnightBlue',
    ]
  }
  render() {
   const boxes = Array.from({length: this.props.numBoxes }).map(() => ( <Box colors={this.props.allColors}/>
   ));
   return <div className="BoxContainer">
     {boxes}
   </div>
  }
}

export default BoxContainer
