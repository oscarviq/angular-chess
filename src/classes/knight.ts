import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';

import { PieceInterface } from '../interfaces';
import { Color } from '../types';

export class Knight implements PieceInterface {

  public readonly name: string = 'Knight';
  public readonly icon: IconDefinition = faChessKnight;

  constructor(
    public readonly color: Color
  ) {}
}
