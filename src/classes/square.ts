import { Piece } from './piece';

export class Square {

  private _colLetters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  public piece: Piece | null = null;

  constructor(
    public row: number,
    private _col: number,
    public color: 'black' | 'white'
  ) {}

  public get col(): string { return this._colLetters[this._col - 1]; }

  public get isLeftEdge(): boolean { return this._col === 1; }

  public get isBottomEdge(): boolean { return this.row === 8; }

  public get isClickable(): boolean { return !!this.piece }
}
