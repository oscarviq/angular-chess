import { Color } from '../types';
import { Square } from './square';
import { Rook } from './rook';
import { Knight } from './knight';
import { Bishop } from './bishop';
import { Queen } from './queen';
import { King } from './king';
import { Pawn } from './pawn';

export class Board {

  public squares: Square[][] = [];

  constructor () {
    this.squares = Array.from({ length: 8 }, (_, row) =>
      Array.from({ length: 8 }, (_, col) =>
        new Square(7 - row, col, (row + col) % 2 === 1 ? 'black' : 'white')
      )
    );
  }

  public initializePieces(): Board {
    const colors: Color[] = ['white', 'black'];
    const colorRows = [[6, 7], [0,1]];

    const rookPositions = [0, 7];
    const knightPositions = [1, 6];
    const bishopPositions = [2, 5];
    const queenPosition = 3;
    const kingPosition = 4;

    colors.forEach((color: Color, colorIndex: number) => {
      const pawnsRow = color === 'white' ? 6 : 1;

      colorRows[colorIndex].forEach((row: number) => {
        if (row !== pawnsRow) {
          this.squares[row].forEach((col: Square, index: number) => {
            if (rookPositions.includes(index)) col.piece = new Rook(color);
            if (knightPositions.includes(index)) col.piece = new Knight(color);
            if (bishopPositions.includes(index)) col.piece = new Bishop(color);
            if (index === queenPosition) col.piece = new Queen(color);
            if (index === kingPosition) col.piece = new King(color);
          });
        } else {
          this.squares[row].forEach((col: Square) => col.piece = new Pawn(color));
        }
      });
    });

    return this;
  }
}
