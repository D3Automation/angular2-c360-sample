import { provideRouter, RouterConfig } from '@angular/router';
import { ModelComponent } from './model';

export const routes: RouterConfig = [
  { path: '', component: ModelComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];