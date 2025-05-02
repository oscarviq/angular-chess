import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChessBishop } from '@fortawesome/free-solid-svg-icons';

import { PieceInterface } from '../interfaces';
import { Color } from '../types';

export class Bishop implements PieceInterface {

  public readonly name: string = 'Bishop';
  public readonly icon: IconDefinition = faChessBishop;

  constructor(
    public readonly color: Color
  ) {}
}
