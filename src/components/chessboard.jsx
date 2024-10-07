import React from 'react'
import './chessboard.css'
import Tile from './Tile';

const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];

// class MyClass {
//   constructor(image, x) {
//     this.image = image;
//     this.x = x;
//     this.y = y;
//   }
// }
// const pieces = [];
// const obj1 = new MyClass();
// pieces.push(obj1.image = 'src/assets/images/pawn_b.png', obj1.x=0, obj1.y=1);

// important part
// const pieces = [
//   { image: 'src/assets/images/pawn_w.png', x: 0, y: 1 },
//   { image: 'src/assets/images/pawn_b.png', x: 0, y: 6 },
//   // You can add more pieces here
// ]

const Piece = [
  {
    image: String,
    x: Number,
    y: Number
  }
]

const pieces = [];

// pawn position

// black pawn
for(let i=0; i<8; i++){
  pieces.push({image: 'src/assets/images/pawn_b.png', x: i, y: 6})
}
// white pawn
for(let i=0; i<8; i++){
  pieces.push({image: 'src/assets/images/pawn_w.png', x: i, y: 1})
}

// black pieces
// black rook
pieces.push({image: 'src/assets/images/rook_b.png', x: 0, y: 7})
pieces.push({image: 'src/assets/images/rook_b.png', x: 7, y: 7})

// black knight
pieces.push({image: 'src/assets/images/knight_b.png', x: 1, y: 7})
pieces.push({image: 'src/assets/images/knight_b.png', x: 6, y: 7})

// black bishop
pieces.push({image: 'src/assets/images/bishop_b.png', x: 2, y: 7})
pieces.push({image: 'src/assets/images/bishop_b.png', x: 5, y: 7})

// black queen
pieces.push({image: 'src/assets/images/queen_b.png', x: 3, y: 7})
// black king
pieces.push({image: 'src/assets/images/king_b.png', x: 4, y: 7})


// white pieces
// white rook
pieces.push({image: 'src/assets/images/rook_w.png', x: 0, y: 0})
pieces.push({image: 'src/assets/images/rook_w.png', x: 7, y: 0})

// white knight
pieces.push({image: 'src/assets/images/knight_w.png', x: 1, y: 0})
pieces.push({image: 'src/assets/images/knight_w.png', x: 6, y: 0})

// white bishop
pieces.push({image: 'src/assets/images/bishop_w.png', x: 2, y: 0})
pieces.push({image: 'src/assets/images/bishop_w.png', x: 5, y: 0})

// white queen
pieces.push({image: 'src/assets/images/queen_w.png', x: 3, y: 0})
// white king
pieces.push({image: 'src/assets/images/king_w.png', x: 4, y: 0})

let activeElement = null;
// const [activeElement, setActiveElement] = useState(null);

function clickPiece(e){
  const element = e.target;
  if(element.classList.contains('chess-piece')){
    // setActiveElement(element);
    //   element.style.position = 'absolute';
    //   element.style.zIndex = 1000;

    const x = e.clientX-50;
    const y = e.clientY-50;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activeElement = element
  }
}

function movePiece(e){
  if(activeElement){
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    activeElement.style.position = "absolute";
    activeElement.style.left = `${x}px`;
    activeElement.style.top = `${y}px`;
  }
}

function dropPiece(e){
  if(activeElement){
    activeElement = null;
  }
}

const Chessboard = () => {
    let board = [];

    for(let j=verticalAxis.length-1; j>=0; j--){
        for(let i=0; i<horizontalAxis.length; i++){
            const number = j+i+2;
            let image = undefined;

            pieces.forEach((p) => {
              if (p.x === i && p.y === j) {
                image = p.image; // Set the image if a piece is found
              }
            });
            
            board.push(<Tile key={`${j},${i}`} number={number} image={image}></Tile>);
        }
    }
  return (
    <div onMouseMove={e => movePiece(e)} onMouseDown={e => clickPiece(e)} onMouseUp={e => dropPiece(e)} id='chessboard'>
        {board}
    </div>
  )
}

export default Chessboard