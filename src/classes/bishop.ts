import { Piece } from './piece';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChessBishop } from '@fortawesome/free-solid-svg-icons';

export class Bishop extends Piece {

  public override readonly icon: IconDefinition = faChessBishop;

  constructor(color: 'black' | 'white') {
    super(color);
  }
}
