// Global Variables

let eligible = []
let eligibleForKing = []
let isChecked = false
let checkedPiece = {}

// Board

const board = []
for(let i = 0; i < 8; i++) {
    board[i] = []
    for(let j = 0; j < 8; j++) {
        board[i][j] = {
            x: i,
            y: j,
        }
    }
}

// const boardGrid = document.getElementById(`board`)


// boardGrid.addEventListener("click", (event) => {
//     const clickedCell = event.target
    
//     const row = Number(clickedCell.getAttribute(`row`))
//     const col = Number(clickedCell.getAttribute(`col`))

//     if(!board[row][col].name && isChecked) { move(checkedPiece, row, col) }
//     else {

//         if(board[row][col].name === "pawn") { checkForPawn(board[row][col]) }

//         else if(board[row][col].name === "rook") { checkForRook(board[row][col]) }

//         else if(board[row][col].name === "knight") { checkForKnight(board[row][col]) }

//         else if(board[row][col].name === "bishop") { checkForBishop(board[row][col]) }

//         else if(board[row][col].name === "queen") { checkForQueen(board[row][col]) }

//         else { checkForKing(board[row][col]) }
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
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 1,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 2,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 3,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 4,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 5,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 6,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 1,
        isTaken: false,
        posX: 1,
        posY: 7,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 0,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 1,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 2,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 3,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 4,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 5,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 6,
        isFirstMove:  true
    },
    {
        name: "pawn",
        color: 0,
        isTaken: false,
        posX: 6,
        posY: 7,
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
    },
    {
        name: "rook",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 7,
        isFirstMove: true,        
    },
    {
        name: "rook",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 0,
        isFirstMove: true,        
    },
    {
        name: "rook",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 7,
        isFirstMove: true,        
    },
]

const knight = [
    {
        name: "knight",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 1,
    },
    {
        name: "knight",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 6,        
    },
    {
        name: "knight",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 1,        
    },
    {
        name: "knight",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 6,        
    },
]

const bishop = [
    {
        name: "bishop",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 2,    
    },
    {
        name: "bishop",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 5,        
    },
    {
        name: "bishop",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 2,        
    },
    {
        name: "bishop",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 5,        
    },
]

const queen = [
    {
        name: "queen",
        color: 1,
        isTaken: false,
        posX: 0,
        posY: 3,        
    },
    {
        name: "queen",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 3,        
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
    },
    {
        name: "king",
        color: 0,
        posX: 7,
        posY: 4,
        isFirstMove: true,
        checked: false,        
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
    if(isChecked && checkedPiece.color !== piece.color) { take(board[checkedPiece.posX][checkedPiece.posY], board[piece.posX][piece.posY]) }
    else if(checkedPiece.name === "king" && checkedPiece.color === piece.color && checkedPiece.isFirstMove) { castle(checkedPiece, piece) }
    else {
        eligible = []
        checkedPiece = {}
        let probPos = []
        
        // Searching towards up
        
        for(let i = piece.posX + 1, j = piece.posY; i < 8; i++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) { break }
        }
        
        // Searching towards down
        
        for(let i = piece.posX - 1, j = piece.posY; i >= 0; i--) {
            
            probPos.push(board[i][j])
            
            if(board[i][j].name) { break }
        }
        
        // Searching towards right
        
        for(let i = piece.posX, j = piece.posY + 1; j < 8; j++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) { break }
        }
        
        // Searching towards left
        
        for(let i = piece.posX, j = piece.posY - 1; j >= 0; j--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) { break }
        }
        
        probPos.forEach(pos => {
            if(!pos.name) { eligible.push(board[pos.x][pos.y])}
            else if(pos.name !== "king" && pos.color !== piece.color) { eligible.push(board[pos.posX][pos.posY]) }
        })

        isChecked = true
        checkedPiece = board[piece.posX][piece.posY]
    }
}

function checkForKnight(piece) {

    if(isChecked && checkedPiece.color !== piece.color) { take(board[checkedPiece.posX][checkedPiece.posY], board[piece.posX][piece.posY]) }
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
            if(!pos.name) { eligible.push(board[pos.x][pos.y]) }
            else if(pos.name !== "king" && pos.color !== piece.color) { eligible.push(board[pos.posX][pos.posY]) }
        })
    
        isChecked = true
        checkedPiece = board[piece.posX][piece.posY]
    }
}

function checkForBishop(piece) {

    if(isChecked && checkedPiece.color !== piece.color) { take(board[checkedPiece.posX][checkedPiece.posY], board[piece.posX][piece.posY]) }
    else {
        eligible = []
        let probPos = []
        
        for(let i = piece.posX + 1, j = piece.posY + 1; i < 8 && j < 8; i++, j++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) break
        }
    
        for(let i = piece.posX - 1, j = piece.posY - 1; i >= 0 && j >= 0; i--, j--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) break
        }
    
        for(let i = piece.posX + 1, j = piece.posY - 1; i < 8 && j >= 0; i++, j--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) break
        }
    
        for(let i = piece.posX - 1, j = piece.posY + 1; i >= 0 && j < 8; i--, j++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) break
        }
    
        probPos.forEach(pos => {
            if(!pos.name) { eligible.push(board[pos.x][pos.y]) }
            else if(pos.name !== "king" && pos.color !== piece.color) { eligible.push(board[pos.posX][pos.posY]) }
        })
    
        isChecked = true
        checkedPiece = board[piece.posX][piece.posY]
    }
}

function checkForQueen(piece) {
    
    if(isChecked && checkedPiece.color !== piece.color) { take(board[checkedPiece.posX][checkedPiece.posY], board[piece.posX][piece.posY]) }
    else {
        eligible = []
        let probPos = []
    
        // Rook search
        
        for(let i = piece.posX + 1, j = piece.posY; i < 8; i++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) break
        }
        
        for(let i = piece.posX - 1, j = piece.posY; i >= 0; i--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) break
        }
        
        for(let i = piece.posX, j = piece.posY + 1; j < 8; j++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) break
        }
        
        for(let i = piece.posX, j = piece.posY - 1; j >= 0; j--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) break
        }
    
        // Bishop search
    
        for(let i = piece.posX + 1, j = piece.posY + 1; i < 8 && j < 8; i++, j++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) break
        }
    
        for(let i = piece.posX - 1, j = piece.posY - 1; i >= 0 && j >= 0; i--, j--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) break
        }
    
        for(let i = piece.posX + 1, j = piece.posY - 1; i < 8 && j >= 0; i++, j--) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) break
        }
    
        for(let i = piece.posX - 1, j = piece.posY + 1; i >= 0 && j < 8; i--, j++) {
            
            probPos.push(board[i][j])
    
            if(board[i][j].name) break
        }
    
        probPos.forEach(pos => {
            if(!pos.name) { eligible.push(board[pos.x][pos.y]) }
            else if(pos.name !== "king" && pos.color !== piece.color) { eligible.push(board[pos.posX][pos.posY]) }
        })
    
        isChecked = true
        checkedPiece = board[piece.posX][piece.posY]
    }
}

function checkForKing(piece) {
    eligibleForKing = []
    let probPos = []
    const init_x = piece.posX, init_y = piece.posY

    if(init_y + 1 < 8 && board[init_x][init_y + 1].color !== piece.color) { probPos.push(board[init_x][init_y + 1]) }
    
    if(init_y - 1 >= 0 && board[init_x][init_y - 1].color !== piece.color) { probPos.push(board[init_x][init_y - 1]) }

    if(init_x + 1 < 8 && board[init_x + 1][init_y].color !== piece.color) { probPos.push(board[init_x + 1][init_y]) }

    if(init_x - 1 >= 0 && board[init_x - 1][init_y].color !== piece.color) { probPos.push(board[init_x - 1][init_y]) }

    if(init_x + 1 < 8 && init_y + 1 < 8 && board[init_x + 1][init_y + 1].color !== piece.color) { probPos.push(board[init_x + 1][init_y + 1]) }

    if(init_x + 1 < 8 && init_y - 1 >= 0 && board[init_x + 1][init_y - 1].color !== piece.color) { probPos.push(board[init_x + 1][init_y - 1]) }

    if(init_x - 1 >= 0 && init_y - 1 >= 0 && board[init_x - 1][init_y - 1].color !== piece.color) { probPos.push(board[init_x - 1][init_y - 1]) }

    if(init_x - 1 >= 0 && init_y + 1 < 8 && board[init_x - 1][init_y + 1].color !== piece.color) { probPos.push(board[init_x - 1][init_y + 1]) }
    
    if(probPos.length >= 1) {

        probPos.forEach(pos => {

            let eligiblePos = true
            let temp_x, temp_y
            let temp_piece = {}
            
            if(pos.name) { 
                temp_piece = pos
                temp_x = pos.posX
                temp_y - pos.posY
            }
            else {
                temp_x = pos.x
                temp_y = pos.y
            }
            piece.name = "pawn";
            piece.posX = temp_x
            piece.posY = temp_y
            board[temp_x][temp_y] = piece
            defaulter(init_x, init_y)
            
            for(const queenPiece of queen) {
                if(queenPiece.color !== piece.color && queenPiece.isTaken === false) {
                    eligible = []
                    checkForQueen(queenPiece)

                    for(const position of eligible) {
                        if(position === board[temp_x][temp_y]) {
                            eligiblePos = false
                            break
                        }
                    }
                }
                if(!eligiblePos) { break }
            }
            
            if(eligiblePos) {
                for(const knightPiece of knight) {
                    if(knightPiece.color !== piece.color && knightPiece.isTaken === false) {
                        eligible = []
                        checkForKnight(knightPiece)

                        for(const position of eligible) {
                            if(position === board[temp_x][temp_y]) {
                                eligiblePos = false
                                break
                            }
                        }
                    }
                    if(!eligiblePos) { break }
                }
            }

            if(eligiblePos) {
                for(const bishopPiece of bishop) {
                    if(bishopPiece.color !== piece.color && bishopPiece.isTaken === false) {
                        eligible = []
                        checkForBishop(bishopPiece)

                        for(const position of eligible) {
                            if(position === board[temp_x][temp_y]) {
                                eligiblePos = false
                                break
                            }
                        }
                    }
                    if(!eligiblePos) { break }
                }
            }

            if(eligiblePos) {
                for(const rookPiece of rook) {
                    if(rookPiece.color !== piece.color && rookPiece.isTaken === false) {
                        eligible = [];
                        checkForRook(rookPiece)
                        for(const position of eligible) {
                            if(position === board[temp_x][temp_y]) {
                                eligiblePos = false
                                break
                            }
                        }
                    }
                    if(!eligiblePos) { break }
                }
            }

            if(eligiblePos) {
                for(const pawnPiece of pawn) {
                    if(pawnPiece.color !== piece.color && pawnPiece.isTaken === false) {
                        eligible = []
                        checkForPawn(pawnPiece)
                        for(const position of eligible) {
                            if(position === board[temp_x][temp_y]) {
                                eligiblePos = false
                                break
                            }
                        }
                    }
                    if(!eligiblePos) { break }
                }
            }
            
            piece.name = "king"
            piece.posX = init_x
            piece.posY = init_y
            board[init_x][init_y] = piece
            
            if(temp_piece) { board[temp_x][temp_y] = temp_piece }
            else { defaulter(temp_x, temp_y) }
            
            if(eligiblePos) { eligibleForKing.push(board[temp_x][temp_y]) }
            eligible = []
        })
    }
    
    isChecked = true
    checkedPiece = board[piece.posX][piece.posY]
}

function checkForPawn(piece) {
    
    if(isChecked && checkedPiece.color !== piece.color) { take(board[checkedPiece.posX][checkedPiece.posY], board[piece.posX][piece.posY]) }
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
    
            if(!pos.name) eligible.push(board[pos.x][pos.y])
        })
    
        probPosToTake.forEach(pos => {
    
            if(pos.name !== "king" && pos.color !== piece.color && pos.name) { eligible.push(board[pos.posX][pos.posY]) }
        })
    
        isChecked = true
        checkedPiece = board[piece.posX][piece.posY]
    }
}

function isKingChecked() {
    king[0].name = "pawn"; king[1].name = "pawn";

    king.forEach(kingPiece => {
        let is_safe = true;
        const king_x = kingPiece.posX, king_y = kingPiece.posY;

        for(const queenPiece of queen) {
            if(queenPiece.color !== piece.color && queenPiece.isTaken === false) {
                eligible = []
                checkForQueen(queenPiece)

                for(const position of eligible) {
                    if(position === board[king_x][king_y]) {
                        is_safe = false;
                        board[king_x][king_y].checked = true;
                        break;
                    }
                }
            }
            if(!is_safe) { break }
        }

        if(is_safe) {
            for(const knightPiece of knight) {
                if(knightPiece.color !== piece.color && knightPiece.isTaken === false) {
                    eligible = []
                    checkForKnight(knightPiece)

                    for(const position of eligible) {
                        if(position === board[king_x][king_y]) {
                            is_safe = false;
                            board[king_x][king_y].checked = true;
                            break;
                        }
                    }
                }
                if(!is_safe) { break }
            }
        }

        if(is_safe) {
            for(const bishopPiece of bishop) {
                if(bishopPiece.color !== piece.color && bishopPiece.isTaken === false) {
                    eligible = []
                    checkForBishop(bishopPiece)

                    for(const position of eligible) {
                        if(position === board[king_x][king_y]) {
                            is_safe = false;
                            board[king_x][king_y].checked = true;
                            break;
                        }
                    }
                }
                if(!is_safe) { break }
            }
        }

        if(is_safe) {
            for(const rookPiece of rook) {
                if(rookPiece.color !== piece.color && rookPiece.isTaken === false) {
                    eligible = [];
                    checkForRook(rookPiece)

                    for(const position of eligible) {
                        if(position === board[king_x][king_y]) {
                            is_safe = false;
                            board[king_x][king_y].checked = true;
                            break;
                        }
                    }
                }
                if(!is_safe) { break }
            }
        }

        if(is_safe) {
            for(const pawnPiece of pawn) {
                if(pawnPiece.color !== piece.color && pawnPiece.isTaken === false) {
                    eligible = []
                    checkForPawn(pawnPiece)

                    for(const position of eligible) {
                        if(position === board[king_x][king_y]) {
                            is_safe = false;
                            board[king_x][king_y].checked = true;
                            break;
                        }
                    }
                }
                if(!is_safe) { break }
            }
        }

        eligible = []
    })

    king[0].name = "king"; king[1].name = "king";
}

function win_check() {
    eligibleForKing = [];
    
    king.forEach(kingPiece => {
        let king_x = kingPiece.posX, king_y = kingPiece.posY;

        if(board[king_x][king_y].checked) {
            checkForKing(board[king_x][king_y]);

            if(eligibleForKing.length === 0) {
                if(board[king_x][king_y].color === 1) { console.log(`black won`); }
                else { console.log(`white won`); }
            }
        }
    })

    eligibleForKing = [];
}


// Take and Move Functions

function take(taking, toBeTaken) {
    
    if(taking.name === "king") {
        for(const position of eligibleForKing) {
            if(position === board[toBeTaken.posX][toBeTaken.posY]) {
                
                let x = toBeTaken.posX, y = toBeTaken.posY;
                toBeTaken.isTaken = true;
                board[toBeTaken.posX][toBeTaken.posY] = taking;
    
                hide(toBeTaken)
                defaulter(taking.posX, taking.posY)
    
                taking.posX = x;
                taking.posY = y;
            
                isChecked = false
                taking.isFirstMove = false
                taking.checked = false;
                checkedPiece = {}
                eligible = []
                eligibleForKing = []
                update()
                isKingChecked()
                win_check()
                break
            }
        }
    }
    else {
        for(const position of eligible) {
            if(position === board[toBeTaken.posX][toBeTaken.posY]) {
                
                let x = toBeTaken.posX, y = toBeTaken.posY;
                toBeTaken.isTaken = true;
                board[toBeTaken.posX][toBeTaken.posY] = taking;
    
                hide(toBeTaken)
                defaulter(taking.posX, taking.posY)
    
                taking.posX = x;
                taking.posY = y;
            
                isChecked = false
                taking.isFirstMove = false
                checkedPiece = {}
                eligible = []
                eligibleForKing = []
                update()
                isKingChecked()
                win_check()
                break
            }
        }
    }
}

function move(moving, x, y) {
    if(moving.name === "king") {
        for(const position of eligibleForKing) {
            if(position === board[x][y]) {
    
                board[x][y] = moving;
                defaulter(moving.posX, moving.posY);
                moving.posX = x
                moving.posY = y
            
                isChecked = false
                moving.isFirstMove = false
                moving.checked = false;
                checkedPiece = {}
                eligibleForKing = []
                update()
                isKingChecked()
                win_check()
                break
            }
        }
    }
    else {
        for(const position of eligible) {
            if(position === board[x][y]) {
    
                board[x][y] = moving;
                defaulter(moving.posX, moving.posY);
                moving.posX = x
                moving.posY = y
            
                isChecked = false
                moving.isFirstMove = false
                checkedPiece = {}
                eligible = []
                update()
                isKingChecked()
                win_check()
                break
            }
        }
    }
}

function castle(kingPiece, rookPiece) {
    
    if(rookPiece.isFirstMove) {
        let x = kingPiece.posX, y = kingPiece.posY;
    
        // For short side castle
        
        if(y < rookPiece.posY) {
            if(!board[x][y + 1].name && !board[x][y + 2].name) {
                
                board[x][y + 2] = kingPiece;
                defaulter(x, y)
                kingPiece.posY = y + 2;

                isKingChecked();

                if(!board[x][y + 2].checked) {

                    board[x][y + 1] = rookPiece;
                    defaulter(rookPiece.posX, rookPiece.posY)
                    rookPiece.posY = y + 1;

                    kingPiece.isFirstMove = false
                    rookPiece.isFirstMove = false
                    kingPiece.checked = false;
                    eligibleForKing = []
                    update()
                    // isKingChecked()
                    win_check()
                }
                else {
                    board[x][y] = kingPiece;
                    defaulter(x, y + 2)
                    kingPiece.posY = y;
                }

                
            }
        }

        // For long side castle

        else {
            if(!board[x][y - 1].name && !board[x][y - 2].name && !board[x][y - 3].name) {
                
                board[x][y - 2] = kingPiece;
                defaulter(x, y)
                kingPiece.posY = y - 2;

                isKingChecked();

                if(!board[x][y - 2].checked) {
                    
                    board[x][y - 1] = rookPiece;
                    defaulter(rookPiece.posX, rookPiece.posY)
                    rookPiece.posY = y - 1;
    
                    kingPiece.isFirstMove = false
                    rookPiece.isFirstMove = false
                    kingPiece.checked = false;
                    eligibleForKing = []
                    update()
                    // isKingChecked()
                    win_check()
                }
                else {
                    board[x][y] = kingPiece;
                    defaulter(x, y - 2)
                    kingPiece.posY = y;
                }
            }
        }
    }
}


// Update functions

function defaulter(h, v) {
    board[h][v] = { x: h, y: v };
}

function hide(takenPiece) {
    // make the display = none for the piece and can be shown elsewhere through an array or something
}

function update() {
    pawn.forEach(piece => {
        if(piece.isTaken) {}
        else { board[piece.posX][piece.posY] = piece; }
    })
    
    rook.forEach(piece => {
        if(piece.isTaken) {}
        else { board[piece.posX][piece.posY] = piece; }
    })
    
    knight.forEach(piece => {
        if(piece.isTaken) {}
        else { board[piece.posX][piece.posY] = piece; }
    })
    
    bishop.forEach(piece => {
        if(piece.isTaken) {}
        else { board[piece.posX][piece.posY] = piece; }
    })
    
    queen.forEach(piece => {
        if(piece.isTaken) {}
        else { board[piece.posX][piece.posY] = piece; }
    })
    
    king.forEach(piece => {
        if(piece.isTaken) {}
        else { board[piece.posX][piece.posY] = piece; }
    })
}

// console.log(board)