import React from 'react'
import './Tile.css'

// interface Props{
//     number: number;
//     image?: string;
// }

const Tile = ({number, image}) => {
  if(number % 2 === 0){
    return <div className='tile green-tile'>
      {image && <div style={{backgroundImage: `url(${image})`}} className='chess-piece'></div>}
    </div>
  }
  else{
    return <div className='tile white-tile'>
      {image && <div style={{backgroundImage: `url(${image})`}} className='chess-piece'></div>}
    </div>
  }
}

export default Tile