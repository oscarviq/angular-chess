import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChessKing } from '@fortawesome/free-solid-svg-icons';

import { PieceInterface } from '../interfaces';
import { Color } from '../types';

export class King implements PieceInterface {

  public readonly name: string = 'King';
  public readonly icon: IconDefinition = faChessKing;

  constructor(
    public readonly color: Color
  ) {}
}
