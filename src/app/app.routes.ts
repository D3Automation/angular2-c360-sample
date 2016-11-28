import { Routes, RouterModule } from '@angular/router';
import { ModelComponent } from './model';
import { ModelNoGraphicsComponent } from './model-no-graphics/model-no-graphics.component';
import { ModelGraphicsOnlyComponent } from './model-graphics-only/model-graphics-only.component';
import { PartResolver } from './part-resolver.service';
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
    resolve: {
      part: PartResolver
    }
  },
  {
    path: 'nographics',
    component: ModelNoGraphicsComponent,
    resolve: {
      part: PartResolver
    }
  },
  {
    path: 'graphicsonly',
    component: ModelGraphicsOnlyComponent,
    resolve: {
      part: PartResolver
    }
  },
  {
    path: 'error',
    component: ErrorComponent
  }  
];

export const appRoutingProviders: any[] = [
  PartResolver
];

export const routing = RouterModule.forRoot(routes);