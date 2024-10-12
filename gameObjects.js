// Board's 1X1 boxes' objects

const board = new Array(8).fill(0).map(() => new Array(8).fill(0))
let eligible

// for(let i = 1; i <= 8; i++) {
//     for(let j = 1; j <= 8; j++) {
//         board[i - 1][j - 1] = document.getElementById(`${i}${j}`)
//     }
// }


// Piece's Objects

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
        isTaken: false,
        posX: 0,
        posY: 4,
        isFirstMove: true,
        //id: document.getElementById('')
    },
    {
        name: "king",
        color: 0,
        isTaken: false,
        posX: 7,
        posY: 4,
        isFirstMove: true,
        //id: document.getElementById('')
    },
]


// pieces init

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


// pawn[0].id.addEventListener("click", () => checkForPawn(pawn[0]))
// pawn[1].id.addEventListener("click", () => checkForPawn(pawn[1]))
// pawn[2].id.addEventListener("click", () => checkForPawn(pawn[2]))
// pawn[3].id.addEventListener("click", () => checkForPawn(pawn[3]))
// pawn[4].id.addEventListener("click", () => checkForPawn(pawn[4]))
// pawn[5].id.addEventListener("click", () => checkForPawn(pawn[5]))
// pawn[6].id.addEventListener("click", () => checkForPawn(pawn[6]))
// pawn[7].id.addEventListener("click", () => checkForPawn(pawn[7]))
// pawn[8].id.addEventListener("click", () => checkForPawn(pawn[8]))
// pawn[9].id.addEventListener("click", () => checkForPawn(pawn[9]))
// pawn[10].id.addEventListener("click", () => checkForPawn(pawn[10]))
// pawn[11].id.addEventListener("click", () => checkForPawn(pawn[11]))
// pawn[12].id.addEventListener("click", () => checkForPawn(pawn[12]))
// pawn[13].id.addEventListener("click", () => checkForPawn(pawn[13]))
// pawn[14].id.addEventListener("click", () => checkForPawn(pawn[14]))
// pawn[15].id.addEventListener("click", () => checkForPawn(pawn[15]))

// Checker functions

function checkForRook(piece) {
    
    for(let i = posX, j = posY; i < 8; i++) {
        if(board[i][j].name === "king") break

        if(board[i][j] !== 0) {

            if(board[i][j].color !== piece.color) {
                eligible.push(board[i][j])
                break
            }
            else break
        }
        else eligible.push(board[i][j])
    }

    for(let i = posX, j = posY; i >= 0; i--) {
        if(board[i][j].name === "king") break

        if(board[i][j] !== 0) {
            
            if(board[i][j].color !== piece.color) {
                eligible.push(board[i][j])
                break
            }
            else break
        }
        else eligible.push(board[i][j])
    }

    for(let i = posX, j = posY; j < 8; j++) {
        if(board[i][j].name === "king") break

        if(board[i][j] !== 0) {
            
            if(board[i][j].color !== piece.color) {
                eligible.push(board[i][j])
                break
            }
            else break
        }
        else eligible.push(board[i][j])
    }

    for(let i = posX, j = posY; j >= 0; j--) {
        if(board[i][j].name === "king") break

        if(board[i][j] !== 0) {
            
            if(board[i][j].color !== piece.color) {
                eligible.push(board[i][j])
                break
            }
            else break
        }
        else eligible.push(board[i][j])
    }

    isChecked = true
}

function checkForKnight(piece) {

    if(piece.posX + 2 < 8 && piece.posY + 1 < 8) {
        let x = piece.posX + 2, y = piece.posY + 1

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX + 2 < 8 && piece.posY - 1 >= 0) {
        let x = piece.posX + 2, y = piece.posY - 1

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX - 2 >= 0 && piece.posY + 1 < 8) {
        let x = piece.posX - 2, y = piece.posY + 1

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX - 2 >= 0 && piece.posY - 1 >= 0) {
        let x = piece.posX - 2, y = piece.posY - 1

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX + 1 < 8 && piece.posY + 2 < 8) {
        let x = piece.posX + 1, y = piece.posY + 2

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX - 1 >= 0 && piece.posY + 2 < 8) {
        let x = piece.posX - 1, y = piece.posY + 2

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX + 1 < 8 && piece.posY - 2 >= 0) {
        let x = piece.posX + 1, y = piece.posY - 2

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX - 1 >= 0 && piece.posY - 2 >= 0) {
        let x = piece.posX - 1, y = piece.posY - 2

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    isChecked = true
}

function checkForBishop(piece) {
    
    for(let i = posX, j = posY; i < 8 && j < 8; i++, j++) {
        
        if(board[i][j].name === "king") break

        if(board[i][j] !== 0) {

            if(board[i][j].color !== piece.color) {
                eligible.push(board[i][j])
                break
            }
            else break
        }
        else eligible.push(board[i][j])
    }

    for(let i = posX, j = posY; i >= 0 && j >= 0; i--, j--) {
        
        if(board[i][j].name === "king") break

        if(board[i][j] !== 0) {

            if(board[i][j].color !== piece.color) {
                eligible.push(board[i][j])
                break
            }
            else break
        }
        else eligible.push(board[i][j])
    }

    for(let i = posX, j = posY; i < 8 && j >= 0; i++, j--) {
        
        if(board[i][j].name === "king") break

        if(board[i][j] !== 0) {

            if(board[i][j].color !== piece.color) {
                eligible.push(board[i][j])
                break
            }
            else break
        }
        else eligible.push(board[i][j])
    }

    for(let i = posX, j = posY; i >= 0 && j < 8; i--, j++) {
        
        if(board[i][j].name === "king") break

        if(board[i][j] !== 0) {

            if(board[i][j].color !== piece.color) {
                eligible.push(board[i][j])
                break
            }
            else break
        }
        else eligible.push(board[i][j])
    }

    isChecked = true
}

function checkForQueen(piece) {
    for(let i = posX, j = posY; i < 8; i++) {
        if(board[i][j].name === "king") break

        if(board[i][j] !== 0) {

            if(board[i][j].color !== piece.color) {
                eligible.push(board[i][j])
                break
            }
            else break
        }
        else eligible.push(board[i][j])
    }

    for(let i = posX, j = posY; i >= 0; i--) {
        if(board[i][j].name === "king") break

        if(board[i][j] !== 0) {
            
            if(board[i][j].color !== piece.color) {
                eligible.push(board[i][j])
                break
            }
            else break
        }
        else eligible.push(board[i][j])
    }

    for(let i = posX, j = posY; j < 8; j++) {
        if(board[i][j].name === "king") break

        if(board[i][j] !== 0) {
            
            if(board[i][j].color !== piece.color) {
                eligible.push(board[i][j])
                break
            }
            else break
        }
        else eligible.push(board[i][j])
    }

    for(let i = posX, j = posY; j >= 0; j--) {
        if(board[i][j].name === "king") break

        if(board[i][j] !== 0) {
            
            if(board[i][j].color !== piece.color) {
                eligible.push(board[i][j])
                break
            }
            else break
        }
        else eligible.push(board[i][j])
    }

    if(piece.posX + 2 < 8 && piece.posY + 1 < 8) {
        let x = piece.posX + 2, y = piece.posY + 1

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX + 2 < 8 && piece.posY - 1 >= 0) {
        let x = piece.posX + 2, y = piece.posY - 1

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX - 2 >= 0 && piece.posY + 1 < 8) {
        let x = piece.posX - 2, y = piece.posY + 1

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX - 2 >= 0 && piece.posY - 1 >= 0) {
        let x = piece.posX - 2, y = piece.posY - 1

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX + 1 < 8 && piece.posY + 2 < 8) {
        let x = piece.posX + 1, y = piece.posY + 2

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX - 1 >= 0 && piece.posY + 2 < 8) {
        let x = piece.posX - 1, y = piece.posY + 2

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX + 1 < 8 && piece.posY - 2 >= 0) {
        let x = piece.posX + 1, y = piece.posY - 2

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    if(piece.posX - 1 >= 0 && piece.posY - 2 >= 0) {
        let x = piece.posX - 1, y = piece.posY - 2

        if(board[x][y].name !== "king" && board[x][y].color === piece.color) {}
        else eligible.push(board[x][y])
    }

    isChecked = true
}

function checkForPawn(piece) {
    
    if(piece.isFirstMove === true) {
        
    }
    else {

    }
}

console.log(board)