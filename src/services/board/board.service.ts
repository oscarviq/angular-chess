import { Injectable } from '@angular/core';
import { Board } from '../../classes';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public getInitialBoard(): Board {
    const board = new Board();
    return board
      .initializeWhite()
      .initializeBlack();
  }
}