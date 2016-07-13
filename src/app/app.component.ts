import { Component, OnInit, ApplicationRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { ModelComponent } from './model';
import { C360ContextService } from 'angular2-c360';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent]
})
export class AppComponent implements OnInit {
  public busy: boolean = false;
  private activities: Set<Observable<any>> = new Set<Observable<any>>();

  constructor(private c360Context: C360ContextService, private appRef: ApplicationRef) {
    c360Context.setDesignKey("575458448649916390/2gn1dj1tslb4");
  }

  ngOnInit() {
    this.setupBusyIndicator();
  }

  private setupBusyIndicator() {
    this.c360Context.modelActivities.subscribe(
      a => {
        this.activities.add(a);
        this.busy = true;
           
        a.subscribe(undefined,
          () => {
            // TODO: Make this more DRY
            this.activities.delete(a);
            this.busy = (this.activities.size > 0);
            
            if (!!document["documentMode"]) {
              // temporary fix for IE11 support
              this.appRef.tick();
            }            
          },
          () => {
            // TODO: Make this more DRY
            this.activities.delete(a);
            this.busy = (this.activities.size > 0);

            if (!!document["documentMode"]) {
              // temporary fix for IE11 support
              this.appRef.tick();
            }            
          });
        }, undefined,
        () => {
            this.activities.clear();
        });
    }  
}
