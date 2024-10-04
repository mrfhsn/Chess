class Piece
{
    color;
    position;
    is_taken = false;

    move() {}
    valid_move() {}
    can_take() {}
    take() {}

    // for showing possibles moves
    check_bound()
    {
        if(this.position[0] >=0 && this.position[0] <= 7 && this.position[1] >=0 && this.position[1] <= 7)
            return true;

        return false;
    }
}

let piece_show = false;

// ``````````````PAWN````````````````````````

class Pawn extends Piece
{
    constructor(color)
    {   
        super();
        this.color = color;
        this.position;
        this.is_first_move = true;
    }

    move()
    {
        if(this.is_first_move) {}
    }
}


let pawn = [];

// white pawns -> 0
for(let i=0; i<8; i++) pawn.push(new Pawn(0));
// black pawns -> 1
for(let i=0; i<8; i++) pawn.push(new Pawn(1));

if(piece_show) console.log(pawn);

// ```````````````````````````````````````````


// ``````````````ROOK````````````````````````

class Rook extends Piece
{
    constructor(color)
    {   
        super();
        this.color = color;
        this.position;
        this.is_first_move = true;
    }

    move() {}
}


let rook = [];

// white Rooks -> 0
for(let i=0; i<2; i++) rook.push(new Rook(0));
// black Rooks -> 1
for(let i=0; i<2; i++) rook.push(new Rook(1));

if(piece_show) console.log(rook);

// ```````````````````````````````````````````


// ``````````````KNIGHT````````````````````````

class Knight extends Piece
{
    constructor(color)
    {   
        super();
        this.color = color;
        this.position;
    }

    move() {}
}


let knight = [];

// white Knights -> 0
for(let i=0; i<2; i++) knight.push(new Knight(0));
// black Knights -> 1
for(let i=0; i<2; i++) knight.push(new Knight(1));

if(piece_show) console.log(knight);

// ```````````````````````````````````````````


// ``````````````BISHOP````````````````````````

class Bishop extends Piece
{
    constructor(color)
    {   
        super();
        this.color = color;
        this.position;
    }

    move() {}
}


let bishop = [];

// white Bishops -> 0
for(let i=0; i<2; i++) bishop.push(new Bishop(0));
// black Bishops -> 1
for(let i=0; i<2; i++) bishop.push(new Bishop(1));

if(piece_show) console.log(bishop);

// ```````````````````````````````````````````


// ``````````````QUEEN````````````````````````

class Queen extends Piece
{
    constructor(color)
    {   
        super();
        this.color = color;
        this.position;
    }

    move() {}
}


let queen = [];

// white Queens -> 0
queen.push(new Queen(0));
// black Queens -> 1
queen.push(new Queen(1));

if(piece_show) console.log(queen);

// ```````````````````````````````````````````


// ``````````````KING````````````````````````

class King extends Piece
{
    constructor(color)
    {   
        super();
        this.color = color;
        this.position;
        this.is_first_move = true;
    }

    move() {}
}


let king = [];

// white Kings -> 0
king.push(new King(0));
// black Kings -> 1
king.push(new King(1));

if(piece_show) console.log(king);

// ```````````````````````````````````````````



// ``````````````BOARD````````````````````````

let board = []
for(let i=0; i<8; i++)
{
    let t_board = []
    for(let j=0; j<8; j++)
    {
        t_board.push(0);
    }

    board.push(t_board);
}

// console.log(board);
// console.log(board[1][7].color);


// putting in pawns
for(let j=0; j<8; j++)
{
    board[1][j] = pawn[j];
    pawn[j].position = [1, j];
}
for(let j=0; j<8; j++)
{
    board[6][j] = pawn[j+8];
    pawn[j+8].position = [6, j+8];
}

// putting in rooks
board[0][0] = rook[0];
board[0][7] = rook[1];
board[7][0] = rook[2];
board[7][7] = rook[3];

// putting in knights
board[0][1] = knight[0];
board[0][6] = knight[1];
board[7][1] = knight[2];
board[7][6] = knight[3];

// putting in bishops
board[0][2] = bishop[0];
board[0][5] = bishop[1];
board[7][2] = bishop[2];
board[7][5] = bishop[3];

// putting in queens
board[0][3] = queen[0];
board[7][3] = queen[1];

// putting in kings
board[0][4] = king[0];
board[7][4] = king[1];


console.log(board);
// console.log(board[1][2].position);
// pawn[1].position = [8, 9];
// console.log(pawn[1].position);
// console.log(pawn[1].check_bound());


// ````````````````````````````````````````````