// Board's 1X1 boxes' objects

const board = new Array(8).fill().map(() => new Array(8).fill())

// for(let i = 1; i <= 8; i++) {
//     for(let j = 1; j <= 8; j++) {
//         board[i - 1][j - 1] = document.getElementById(`${i}${j}`)
//     }
// }


// Piece's Objects

const pawn = [
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 0,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 1,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 2,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 3,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 4,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 5,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 6,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 7,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 0,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 1,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 2,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 3,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 4,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 5,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 6,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 7,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
]

const rook = [
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 0,
        //id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 7,
        //id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 0,
        //id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 7,
        //id: document.getElementById('')
    },
]

const knight = [
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 1,
        //id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 6,
        //id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 1,
        //id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 6,
        //id: document.getElementById('')
    },
]

const bishop = [
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 2,
        //id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 5,
        //id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 2,
        //id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 5,
        //id: document.getElementById('')
    },
]

const queen = [
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 3,
        //id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 3,
        //id: document.getElementById('')
    },
]

const king = [
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 4,
        //id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 4,
        //id: document.getElementById('')
    },
]


// pieces init

pawn.forEach(piece => {
    board[piece.positionX][piece.positionY] = piece
})

rook.forEach(piece => {
    board[piece.positionX][piece.positionY] = piece
})

knight.forEach(piece => {
    board[piece.positionX][piece.positionY] = piece
})

bishop.forEach(piece => {
    board[piece.positionX][piece.positionY] = piece
})

queen.forEach(piece => {
    board[piece.positionX][piece.positionY] = piece
})

king.forEach(piece => {
    board[piece.positionX][piece.positionY] = piece
})


// pawn[0].id.addEventListener("click", () => readyToMovePawn(pawn[0]))
// pawn[1].id.addEventListener("click", () => readyToMovePawn(pawn[1]))
// pawn[2].id.addEventListener("click", () => readyToMovePawn(pawn[2]))
// pawn[3].id.addEventListener("click", () => readyToMovePawn(pawn[3]))
// pawn[4].id.addEventListener("click", () => readyToMovePawn(pawn[4]))
// pawn[5].id.addEventListener("click", () => readyToMovePawn(pawn[5]))
// pawn[6].id.addEventListener("click", () => readyToMovePawn(pawn[6]))
// pawn[7].id.addEventListener("click", () => readyToMovePawn(pawn[7]))
// pawn[8].id.addEventListener("click", () => readyToMovePawn(pawn[8]))
// pawn[9].id.addEventListener("click", () => readyToMovePawn(pawn[9]))
// pawn[10].id.addEventListener("click", () => readyToMovePawn(pawn[10]))
// pawn[11].id.addEventListener("click", () => readyToMovePawn(pawn[11]))
// pawn[12].id.addEventListener("click", () => readyToMovePawn(pawn[12]))
// pawn[13].id.addEventListener("click", () => readyToMovePawn(pawn[13]))
// pawn[14].id.addEventListener("click", () => readyToMovePawn(pawn[14]))
// pawn[15].id.addEventListener("click", () => readyToMovePawn(pawn[15]))

// function readyToMovePawn(pawnPiece) {
//     if(pawnPiece.isFirstMove) {
//         if(board[pawnPiece.positionX + 1][pawnPiece.positionY] === false && board[pawnPiece.positionX + 2][pawnPiece.positionY] === false) {
//             board[pawnPiece.positionX + 1][pawnPiece.positionY].style.brightness = "1.5"
//             board[pawnPiece.positionX + 2][pawnPiece.positionY].style.brightness = "1.5"
//         }
//     }
// }

console.log(board)