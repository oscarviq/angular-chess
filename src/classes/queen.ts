import { Piece } from './piece';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChessQueen } from '@fortawesome/free-solid-svg-icons';

export class Queen extends Piece {

  public override readonly icon: IconDefinition = faChessQueen;

  constructor(color: 'black' | 'white') {
    super(color);
  }
}
