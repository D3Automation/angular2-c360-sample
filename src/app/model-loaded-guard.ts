import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { C360ContextService } from 'angular2-c360';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ModelLoadedGuard implements CanActivate {
  constructor(private c360Context: C360ContextService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      //return true;
      // TODO: Load model within ModelLoadedGuard once it can handle returning an observable
      return this.c360Context.getNewModel()
        .map(root => {
          return this.c360Context.isModelLoaded()
        }).take(1);
  }
}