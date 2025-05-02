import { PieceInterface } from '../interfaces';
import { Color } from '../types';

export class Square {

  public piece: PieceInterface | null = null;

  constructor(
    public row: number,
    public col: number,
    public color: Color
  ) {}

  public get colLetter(): string {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'][this.col];
  }
}
