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
        return Observable.of(true);
      }
      else {
        return this.c360Context.getNewModel()
          .map(root => {
            return this.c360Context.isModelLoaded();
          }).catch(err => {
            this.router.navigate(['/error']);
            return Observable.of(false);
          });
      }
  }
}