import { Piece } from './piece';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChessKing } from '@fortawesome/free-solid-svg-icons';

export class King extends Piece {

  public override readonly icon: IconDefinition = faChessKing;

  constructor(color: 'black' | 'white') {
    super(color);
  }
}
