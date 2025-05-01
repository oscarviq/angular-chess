import { bootstrapApplication } from '@angular/platform-browser';

import { App } from './app.component';
import { Router } from './router';

bootstrapApplication(App, {
  providers: [
    Router
  ]
});
