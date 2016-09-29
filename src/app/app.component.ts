import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { C360ContextService } from 'angular2-c360';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  public busy: boolean = false;
  private activities: Set<Observable<any>> = new Set<Observable<any>>();

  constructor(private c360Context: C360ContextService, private appRef: ApplicationRef) {}

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
