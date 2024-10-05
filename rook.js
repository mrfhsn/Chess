const board = new Array(8).fill().map(() => new Array(8).fill())

const rook = [
    {
        color: 0,
        isTaken: false,
        x: 0,
        y: 0
    },
    {
        color: 1,
        isTaken: false,
        x: 8,
        y: 8
    }
]

function readyToMove() {
    let x = rook.x, y = rook.y, yUp, yDown, xRight, xLeft
    
    for (yUp = y; yUp < 8; yUp++) {
        if(board[x][yUp] !== null) break
        else{}
    }
    for (yDown = y; yDown > -1; yUp--) {
        if(board[x][yDown] !== null) break
        else{}
    }
    for (xRight = x; xRight < 8; xRight++) {
        if(board[xRight][y] !== null) break
        else{}
    }
    for (xLeft = x; xLeft > -1; xLeft--) {
        if(board[xLeft][y] !== null) break
        else{}
    }
}