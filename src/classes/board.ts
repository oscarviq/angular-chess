import { Square } from './square';
import { Pawn } from './pawn';

export class Board {

  public squares: Square[][] = [];

  constructor () {
    this.squares = Array.from({ length: 8 }, (_, row) => 
      Array.from({ length: 8 }, (_, col) => 
        new Square(row + 1, col + 1, (row + col) % 2 === 1 ? 'black' : 'white')
      )
    );
  }

  public initializeWhite(): Board {
    this.squares[1].forEach((col: Square) => col.piece = new Pawn('white'));
    return this;
  }

  public initializeBlack(): Board {
    this.squares[6].forEach((col: Square) => col.piece = new Pawn('black'));
    return this;
  }
}