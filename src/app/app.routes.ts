import { Routes, RouterModule } from '@angular/router';
import { ModelComponent } from './model';
import { ModelNoGraphicsComponent } from './model-no-graphics/model-no-graphics.component';
import { ModelGraphicsOnlyComponent } from './model-graphics-only/model-graphics-only.component';
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
    path: 'nographics',
    component: ModelNoGraphicsComponent,
    canActivate: [ModelLoadedGuard]
  },
  {
    path: 'graphicsonly',
    component: ModelGraphicsOnlyComponent,
    canActivate: [ModelLoadedGuard]
  },
  {
    path: 'error',
    component: ErrorComponent
  }  
];

export const appRoutingProviders: any[] = [
  ModelLoadedGuard
];

export const routing = RouterModule.forRoot(routes);