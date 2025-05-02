import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons';

import { PieceInterface } from '../interfaces';
import { Color } from '../types';

export class Pawn implements PieceInterface {

  public readonly name: string = 'Pawn';
  public readonly icon: IconDefinition = faChessPawn;

  constructor(
    public readonly color: Color
  ) {}
}
