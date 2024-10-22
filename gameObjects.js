// Global Variables

let eligible = []
let eligibleForKing = []
let isChecked = false
let checkedPiece = {}

// Board

const board = new Array(8).fill(0).map(() => new Array(8).fill(0))
// const boardGrid = document.getElementById(`board`)


// boardGrid.addEventListener("click", (event) => {
//     const clickedCell = event.target
    
//     const row = Number(clickedCell.getAttribute(`row`))
//     const col = Number(clickedCell.getAttribute(`col`))

//     if(board[row][col] === 0) {
//         if(isChecked) { move(checkedPiece, row, col) }
//     }
//     else {
//         const tempPiece = {}
//         tempPiece = board[row][col]

//         if(tempPiece.name === "pawn") { checkForPawn(tempPiece) }

//         else if(tempPiece.name === "rook") { checkForRook(tempPiece) }

//         else if(tempPiece.name === "knight") { checkForKnight(tempPiece) }

//         else if(tempPiece.name === "bishop") { checkForBishop(tempPiece) }

//         else if(tempPiece.name === "queen") { checkForQueen(tempPiece) }

//         else { checkForKing(tempPiece) }
//     }
// })


// Pieces with their attributes

const pawn = [
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 0,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 1,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 2,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 3,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 4,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 5,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 6,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 7,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 0,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 1,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 2,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 3,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 4,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 5,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 6,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 7,
        //id: document.getElementById(''),
        isFirstMove:  true
    },
]

const rook = [
    {
        name: "rook",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 0,
        isFirstMove: true,
        //id: document.getElementById('')
    },
    {
        name: "rook",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 7,
        isFirstMove: true,
        //id: document.getElementById('')
    },
    {
        name: "rook",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 0,
        isFirstMove: true,
        //id: document.getElementById('')
    },
    {
        name: "rook",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 7,
        isFirstMove: true,
        //id: document.getElementById('')
    },
]

const knight = [
    {
        name: "knight",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 1,
        //id: document.getElementById('')
    },
    {
        name: "knight",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 6,
        //id: document.getElementById('')
    },
    {
        name: "knight",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 1,
        //id: document.getElementById('')
    },
    {
        name: "knight",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 6,
        //id: document.getElementById('')
    },
]

const bishop = [
    {
        name: "bishop",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 2,
        //id: document.getElementById('')
    },
    {
        name: "bishop",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 5,
        //id: document.getElementById('')
    },
    {
        name: "bishop",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 2,
        //id: document.getElementById('')
    },
    {
        name: "bishop",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 5,
        //id: document.getElementById('')
    },
]

const queen = [
    {
        name: "queen",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 3,
        //id: document.getElementById('')
    },
    {
        name: "queen",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 3,
        //id: document.getElementById('')
    },
]

const king = [
    {
        name: "king",
        color: 1,
        posX: 0,
        posY: 4,
        isFirstMove: true,
        checked: false,
        //id: document.getElementById('')
    },
    {
        name: "king",
        color: 0,
        posX: 7,
        posY: 4,
        isFirstMove: true,
        checked: false,
        //id: document.getElementById('')
    },
]


// Pieces' initial position

pawn.forEach(piece => {
    board[piece.posX][piece.posY] = piece
})

rook.forEach(piece => {
    board[piece.posX][piece.posY] = piece
})

knight.forEach(piece => {
    board[piece.posX][piece.posY] = piece
})

bishop.forEach(piece => {
    board[piece.posX][piece.posY] = piece
})

queen.forEach(piece => {
    board[piece.posX][piece.posY] = piece
})

king.forEach(piece => {
    board[piece.posX][piece.posY] = piece
})



// Checker functions

function checkForRook(piece) {
    if(isChecked && checkedPiece.color !== piece.color) { take(checkedPiece, piece) }
    else if(checkedPiece.name === "king" && checkedPiece.color === piece.color) { castle(checkedPiece, piece) }
    else {
        eligible = []
        checkedPiece = {}
        let probPos = []
        
        // Searching towards up
        
        for(let i = piece.posX, j = piece.posY; i < 8; i++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
        
        // Searching towards down
        
        for(let i = piece.posX, j = piece.posY; i >= 0; i--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
        
        // Searching towards right
        
        for(let i = piece.posX, j = piece.posY; j < 8; j++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
        
        // Searching towards left
        
        for(let i = piece.posX, j = piece.posY; j >= 0; j--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
        
        probPos.forEach(pos => {
    
            if(pos.name !== "king" && pos.color !== piece.color) { eligible.push(pos) }
        })
    
        isChecked = true
        checkedPiece = piece
    }
}

function checkForKnight(piece) {

    if(isChecked && checkedPiece.color !== piece.color) { take(checkedPiece, piece) }
    else {
        eligible = []
        let probPos =[]
        
        if(piece.posX + 2 < 8 && piece.posY + 1 < 8) probPos.push(board[piece.posX + 2][piece.posY + 1])
    
        if(piece.posX + 2 < 8 && piece.posY - 1 >= 0) probPos.push(board[piece.posX + 2][piece.posY - 1])
    
        if(piece.posX - 2 >= 0 && piece.posY + 1 < 8) probPos.push(board[piece.posX - 2][piece.posY + 1])
    
        if(piece.posX - 2 >= 0 && piece.posY - 1 >= 0) probPos.push(board[piece.posX - 2][piece.posY - 1])
    
        if(piece.posX + 1 < 8 && piece.posY + 2 < 8) probPos.push(board[piece.posX + 1][piece.posY + 2])
    
        if(piece.posX - 1 >= 0 && piece.posY + 2 < 8) probPos.push(board[piece.posX - 1][piece.posY + 2])
    
        if(piece.posX + 1 < 8 && piece.posY - 2 >= 0) probPos.push(board[piece.posX + 1][piece.posY - 2])
    
        if(piece.posX - 1 >= 0 && piece.posY - 2 >= 0) probPos.push(board[piece.posX - 1][piece.posY - 2])
    
        probPos.forEach(pos => {
    
            if(pos.name !== "king" && pos.color !== piece.color) { eligible.push(pos) }
        })
    
        isChecked = true
        checkedPiece = piece
    }
}

function checkForBishop(piece) {

    if(isChecked && checkedPiece.color !== piece.color) take(checkedPiece, piece)
    else {
        eligible = []
        let probPos = []
        
        for(let i = piece.posX, j = piece.posY; i < 8 && j < 8; i++, j++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
    
        for(let i = piece.posX, j = piece.posY; i >= 0 && j >= 0; i--, j--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
    
        for(let i = piece.posX, j = piece.posY; i < 8 && j >= 0; i++, j--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
    
        for(let i = piece.posX, j = piece.posY; i >= 0 && j < 8; i--, j++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
    
        probPos.forEach(pos => {
            if(pos.name !== "king" && pos.color !== piece.color) { eligible.push(pos) }
        })
    
        isChecked = true
        checkedPiece = piece
    }
}

function checkForQueen(piece) {
    
    if(isChecked && checkedPiece.color !== piece.color) take(checkedPiece, piece)
    else {
        eligible = []
        let probPos = []
    
        // Rook search
        
        for(let i = piece.posX, j = piece.posY; i < 8; i++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
        
        for(let i = piece.posX, j = piece.posY; i >= 0; i--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
        
        for(let i = piece.posX, j = piece.posY; j < 8; j++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
        
        for(let i = piece.posX, j = piece.posY; j >= 0; j--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
    
        // Bishop search
    
        for(let i = piece.posX, j = piece.posY; i < 8 && j < 8; i++, j++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
    
        for(let i = piece.posX, j = piece.posY; i >= 0 && j >= 0; i--, j--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
    
        for(let i = piece.posX, j = piece.posY; i < 8 && j >= 0; i++, j--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
    
        for(let i = piece.posX, j = piece.posY; i >= 0 && j < 8; i--, j++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j] !== 0) break
        }
    
        probPos.forEach(pos => {
            
            if(pos.name !== "king" && pos.color !== piece.color) { eligible.push(pos) }
        })
    
        isChecked = true
        checkedPiece = piece
    }
}

function checkForKing(piece) {
    eligibleForKing = []
    let probPos = []

    if(piece.posY + 1 < 8) { probPos.push(board[piece.posX][piece.posY + 1]) }
    
    if(piece.posY - 1 >= 0) { probPos.push(board[piece.posX][piece.posY - 1]) }

    if(piece.posX + 1 < 8) { probPos.push(board[piece.posX + 1][piece.posY]) }

    if(piece.posX - 1 >= 0) { probPos.push(board[piece.posX - 1][piece.posY]) }

    if(piece.posX + 1 < 8 && piece.posY + 1 < 8) { probPos.push(board[piece.posX + 1][piece.posY + 1]) }

    if(piece.posX + 1 < 8 && piece.posY - 1 >= 0) { probPos.push(board[piece.posX + 1][piece.posY - 1]) }

    if(piece.posX - 1 >= 0 && piece.posY - 1 >= 0) { probPos.push(board[piece.posX - 1][piece.posY - 1]) }

    if(piece.posX - 1 >= 0 && piece.posY + 1 < 8) { probPos.push(board[piece.posX - 1][piece.posY + 1]) }

    // probPos.forEach(pos => {
    //     if(pos.name !== "king" && pos.color !== piece.color) {eligibleForKing.push(pos)}
    // })
}

function checkForPawn(piece) {
    
    if(isChecked && checkedPiece.color !== piece.color) take(checkedPiece, piece)
    else {
        eligible = []
        let probPosToMove = [], probPosToTake = []
        let initX = piece.posX, initY = piece.posY
        
        // Checking for white
        
        if(piece.color === 1) {
            
            if(piece.isFirstMove) {
    
                if(initX + 1 < 8) {
                    
                    probPosToMove.push(board[initX + 1][initY], board[initX + 2][initY])
    
                    if(initY + 1 < 8) probPosToTake.push(board[initX + 1][initY + 1])
                    if(initY - 1 >= 0) probPosToTake.push(board[initX + 1][initY - 1])
                }
            }
            else {
    
                if(initX + 1 < 8) {
                    
                    probPosToMove.push(board[initX + 1][initY])
    
                    if(initY + 1 < 8) probPosToTake.push(board[initX + 1][initY + 1])
                    if(initY - 1 >= 0) probPosToTake.push(board[initX + 1][initY - 1])
                }
            }
        }
        
        // Checking for Black

        else {
            if(piece.isFirstMove) {
    
                if(initX - 1 >= 0) {
    
                    probPosToMove.push(board[initX - 1][initY], board[initX - 2][initY])
    
                    if(initY + 1 < 8) probPosToTake.push(board[initX - 1][initY + 1])
                    if(initY - 1 >= 0) probPosToTake.push(board[initX - 1][initY - 1])
                }
            }
            else {
                
                if(initX - 1 >= 0) {
    
                    probPosToMove.push(board[initX - 1][initY])
    
                    if(initY + 1 < 8) probPosToTake.push(board[initX - 1][initY + 1])
                    if(initY - 1 >= 0) probPosToTake.push(board[initX - 1][initY - 1])
                }
            }
        }
    
        probPosToMove.forEach(pos => {
    
            if(pos === 0) eligible.push(pos)
        })
    
        probPosToTake.forEach(pos => {
    
            if(pos.name !== "king" && pos.color !== piece.color && pos !== 0) { eligible.push(pos) }
        })
    
        isChecked = true
        checkedPiece = piece
    }
}

// Take and Move Functions

function take(taking, toBeTaken) {
    let matched = false

    for(const position of eligible) {
        if(position === board[toBeTaken.posX][toBeTaken.posY]) {
            matched = true
            break
        }
    }
    
    if(matched) {
        taking.posX = toBeTaken.posX
        taking.posY = toBeTaken.posY
        toBeTaken.isTaken = true
        board[taking.posX][taking.posY] = taking
    
        isChecked = false
        isFirstMove = false
        checkedPiece = {}
        eligible = []
        eligibleForKing = []
    }
}

function move(moving, x, y) {
    let matched = false

    for(const position of eligible) {
        if(position === board[moving.posX][moving.posY]) {
            matched = true
            break
        }
    }

    if(matched) {
        board[x][y] = moving
        board[moving.posX][moving.posY] = 0
    
        isChecked = false
        isFirstMove = false
        checkedPiece = {}
        eligible = []
        eligibleForKing = []
    }
}

function castle(king, rook) {
    if(rook.isFirstMove) {
        let x = king.posX, y = king.posY
    
        // For short side castle
        
        if(y < rook.posY) {
            if(board[x][y + 1] === 0 && board[x][y + 2] === 0) {
                king.posY += 2
                rook.posY = king.posY - 1
                king.isFirstMove = false
                rook.isFirstMove = false
                eligibleForKing = []
            }
        }

        // For long side castle

        else {
            if(board[x][y - 1] === 0 && board[x][y - 2] === 0 && board[x][y - 3] === 0) {
                king.posY -= 2
                rook.posY = king.posY + 1
                king.isFirstMove = false
                rook.isFirstMove = false
                eligibleForKing = []
            }
        }
    }
}

// checkForPawn(pawn[0])
// console.log(checkedPiece)
// console.log(eligible)
// checkForQueen(queen[1])
// console.log(queen[1])
// console.log(pawn[0])
// console.log(checkedPiece)
// console.log(eligible)

// console.log(board)