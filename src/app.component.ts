import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule
  ],
  template: `
    <div class="min-h-screen bg-gray-200 p-8">
      <router-outlet />
    </div>
  `
})
export class App {}