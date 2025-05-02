import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChessRook } from '@fortawesome/free-solid-svg-icons';

import { PieceInterface } from '../interfaces';
import { Color } from '../types';

export class Rook implements PieceInterface {

  public readonly name: string = 'Rook';
  public readonly icon: IconDefinition = faChessRook;

  constructor(
    public readonly color: Color
  ) {}
}
