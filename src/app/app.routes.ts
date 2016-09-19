import { Routes, RouterModule } from '@angular/router';
import { ModelComponent } from './model';
import { ModelLoadedGuard } from './model-loaded-guard';
import { ErrorComponent } from './error';
import { C360ContextService } from 'angular2-c360';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/model',
    pathMatch: 'full'
  },
  {
    path: 'model',
    component: ModelComponent,
    canActivate: [ModelLoadedGuard]
  },
  {
    path: 'error',
    component: ErrorComponent
  }  
];

export const routing = RouterModule.forRoot(routes);