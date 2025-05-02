import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChessQueen } from '@fortawesome/free-solid-svg-icons';

import { PieceInterface } from '../interfaces';
import { Color } from '../types';

export class Queen implements PieceInterface {

  public readonly name: string = 'Queen';
  public readonly icon: IconDefinition = faChessQueen;

  constructor(
    public readonly color: Color
  ) {}
}
