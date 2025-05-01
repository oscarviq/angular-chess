import { Piece } from './piece';

export class Pawn extends Piece {

  public override readonly icon: string = 'P';

  constructor(color: 'black' | 'white') {
    super(color);
  }
}