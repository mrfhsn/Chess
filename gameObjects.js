// Board's 1X1 boxes' objects

const board = new Array(8).fill().map(() => new Array(8).fill())

for(let i = 1; i <= 8; i++) {
    for(let j = 1; j <= 8; j++) {
        board[i - 1][j - 1] = document.getElementById(`${i}${j}`)
        board[i - 1][j - 1] = [
            whoOccupied,
        ]
    }
}


// Piece's Objects

const pawn = [
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 0,
        id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 1,
        id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 2,
        id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 3,
        id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 4,
        id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 5,
        id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 6,
        id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 1,
        positionY: 7,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 0,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 1,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 2,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 3,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 4,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 5,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 6,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 6,
        positionY: 7,
        id: document.getElementById('')
    },
]

const rook = [
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 0,
        id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 7,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 0,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 7,
        id: document.getElementById('')
    },
]

const knight = [
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 1,
        id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 6,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 1,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 6,
        id: document.getElementById('')
    },
]

const bishop = [
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 2,
        id: document.getElementById('')
    },
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 5,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 2,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 5,
        id: document.getElementById('')
    },
]

const queen = [
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 3,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 3,
        id: document.getElementById('')
    },
]

const king = [
    {
        color: "white",
        isTaken: false,
        positionX: 0,
        positionY: 4,
        id: document.getElementById('')
    },
    {
        color: "black",
        isTaken: false,
        positionX: 7,
        positionY: 4,
        id: document.getElementById('')
    },
]


// pieces init

pawn.forEach(piece => {
    board[piece.positionX][piece.positionY].whoOccupied = piece
})

rook.forEach(piece => {
    board[piece.positionX][piece.positionY].whoOccupied = piece
})

knight.forEach(piece => {
    board[piece.positionX][piece.positionY].whoOccupied = piece
})

bishop.forEach(piece => {
    board[piece.positionX][piece.positionY].whoOccupied = piece
})

queen.forEach(piece => {
    board[piece.positionX][piece.positionY].whoOccupied = piece
})

king.forEach(piece => {
    board[piece.positionX][piece.positionY].whoOccupied = piece
})