import { Routes, provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadComponent: () => import('./pages/index/index.page').then(m => m.IndexPage)
}];

export const Router = provideRouter(
  routes, 
  withComponentInputBinding()
);