class Piece
{
    color;
    is_taken = false;
    // position;
    move() {}
    valid_move() {}
    can_take() {}
    take() {}

}

class Pawn extends Piece
{
    constructor(color)
    {
        super();
        this.color = color
        this.is_first_move = true;
    }

    move()
    {
        if(this.is_first_move)
        {

        }
    }
}


let pawn = new Pawn(1);
// console.log(pawn);



let board = []
for(let i=0; i<8; i++)
{
    let t_board = []
    for(let j=0; j<8; j++)
    {
        t_board.push(i+j);
    }

    board.push(t_board);
}
board[1][7] = pawn;
// board[2][5] = 5;
// console.log(board);
console.log(board[1][7].color);