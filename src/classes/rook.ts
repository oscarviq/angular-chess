import { Piece } from './piece';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChessRook } from '@fortawesome/free-solid-svg-icons';

export class Rook extends Piece {

  public override readonly icon: IconDefinition = faChessRook;

  constructor(color: 'black' | 'white') {
    super(color);
  }
}
