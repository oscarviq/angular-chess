import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export class Piece {

  public readonly icon: IconDefinition | null = null;

  constructor(
    readonly color: 'black' | 'white'
  ) { }
}
