import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';
import { C360ContextService, UIPart } from 'angular2-c360';

@Injectable()
export class PartResolver implements Resolve<UIPart> {
  constructor(private c360Context: C360ContextService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<UIPart> {
    let refChain = route.params['refChain'];

    if (!refChain) {
      refChain = "Root";
    } 

    if (this.c360Context.isModelLoaded()) {
      return Promise.resolve(this.c360Context.getPartByRefChain(refChain));
    }
    else {
      return this.c360Context.getNewModel()
        .then(root => { return this.c360Context.getPartByRefChain(refChain); })
        .catch(err => {
          this.router.navigate(['/error']);
        });
    }
  }
}
