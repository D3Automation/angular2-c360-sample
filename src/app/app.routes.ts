import { provideRouter, RouterConfig } from '@angular/router';
import { ModelComponent } from './model';
import { ModelLoadedGuard } from './model-loaded-guard';
import { ErrorComponent } from './error';
import { C360ContextService } from 'angular2-c360';

export const routes: RouterConfig = [
  {
    path: '',
    component: ModelComponent,
    canActivate: [ModelLoadedGuard]
  },
  {
    path: 'error',
    component: ErrorComponent
  }  
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  ModelLoadedGuard,
  C360ContextService
];