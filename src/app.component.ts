import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule
  ],
  template: `
    <div class="min-h-screen bg-gray-300 p-8 flex items-center justify-center">
      <router-outlet />
    </div>
  `
})
export class App {}
