import { Injectable, signal, WritableSignal } from '@angular/core';

import { Board, Square } from '../../classes';
import { Color } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public board: WritableSignal<Board> = signal(new Board);
  public activeTurn: WritableSignal<Color> = signal('white');
  public activeSquare: WritableSignal<Square | null> = signal(null);

  constructor() {
    this.board().initializePieces();
  }

  public isSquareClickable(square: Square): boolean {
    if (!!this.activeSquare() && square.piece !== this.activeSquare()?.piece) return false;
    return !!square.piece && this.activeTurn() === square.piece.color;
  }

  public setActiveSquare(square: Square): void {
    if (!this.isSquareClickable(square)) return;
    this.activeSquare.update((current) => {
      if (current === square) return null;
      return square;
    });
  }
}
