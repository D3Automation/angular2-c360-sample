import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { C360ContextService, C360ViewerComponent } from 'angular2-c360';
import { C360PropComponent } from '../c360-prop';

@Component({
  moduleId: module.id,
  selector: 'app-model',
  templateUrl: 'model.component.html',
  styleUrls: ['model.component.css'],
  directives: [C360PropComponent,C360ViewerComponent]
})
export class ModelComponent implements OnInit {
  constructor(private c360Context: C360ContextService) { }

  public trailer:any;
  public busy: boolean = false;
  public activities: Set<Observable<any>> = new Set<Observable<any>>();

  ngOnInit() {
    this.setupBusyIndicator();
    
    return this.c360Context.getNewModel()
      .subscribe(root => this.trailer = root, (err) => {
        console.error(err)
      });
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
          },
          () => {
            // TODO: Make this more DRY
            this.activities.delete(a);
            this.busy = (this.activities.size > 0);
          });
        }, undefined,
        () => {
            this.activities.clear();
        });
    }
}
