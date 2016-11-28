import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { C360ContextService } from 'angular2-c360';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ModelLoadedGuard implements CanActivate {
  constructor(private c360Context: C360ContextService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.c360Context.isModelLoaded()) {
        return Promise.resolve(true);
      }
      else {
        return this.c360Context.getNewModel()
          .then(root => { return true; })
          .catch(err => {
            this.router.navigate(['/error']);
            return Promise.resolve(false);
          });
      }
  }
}