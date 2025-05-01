import { Component } from '@angular/core';

import { ChessBoardComponent } from '../../components/chess-board/chess-board.component';

@Component({
  selector: 'index-page',
  imports: [
    ChessBoardComponent
  ],
  template: `
    <div class="flex items-center justify-center">
      <chess-board />
    </div>
  `
})
export class IndexPage {}