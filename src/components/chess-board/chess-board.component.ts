import { Component, inject, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Color } from '../../types';
import { Board, Square } from '../../classes';
import { BoardService } from '../../services';

@Component({
  selector: 'chess-board',
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  providers: [
    BoardService,
  ],
  templateUrl: './chess-board.template.html',
})
export class ChessBoardComponent {
  public boardService: BoardService = inject(BoardService);

  public board: Signal<Board> = computed(() => this.boardService.board());
  public activeTurn: Signal<Color> = computed(() => this.boardService.activeTurn());
  public activeSquare: Signal<Square | null> = computed(() => this.boardService.activeSquare());

  public isSquareAtLeftEdge(square: Square): boolean { return square.col === 0; }

  public isSquareAtBottomEdge(square: Square): boolean { return square.row === 7; }
}
