import { Injectable } from '@angular/core';
import { Board } from '../../classes';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public board: Board = new Board();

  constructor() {
    this.board = this.board.initializePieces();
  }
}
