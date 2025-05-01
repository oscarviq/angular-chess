import { Piece } from './piece';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';

export class Knight extends Piece {

  public override readonly icon: IconDefinition = faChessKnight;

  constructor(color: 'black' | 'white') {
    super(color);
  }
}
