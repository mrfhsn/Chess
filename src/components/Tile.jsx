import React from 'react'
import './Tile.css'

// interface Props{
//     number: number;
//     image?: string;
// }

const Tile = ({number, image}) => {
  if(number % 2 === 0){
    return <div className='tile green-tile'>
      <img src={image} alt="" />
    </div>
  }
  else{
    return <div className='tile white-tile'>
      <img src={image} alt="" />
    </div>
  }
}

export default Tile