import { Component, inject, signal, Signal } from '@angular/core';
import { FontAswesomeModule } from '@fortawesome/angular-fontawesome';

import { Board } from '../../classes';
import { BoardService } from '../../services';

@Component({
  selector: 'chess-board',
  imports: [
    FontAswesomeModule
  ],
  providers: [
    BoardService,
  ],
  templateUrl: './chess-board.template.html',
})
export class ChessBoardComponent {

  public boardService: BoardService = inject(BoardService);

  public board: Signal<Board> = signal(this.boardService.getInitialBoard());

  constructor() {
    console.log(this.board());
  }
}