import { Component, OnInit } from '@angular/core';
import { C360ContextService, C360ViewerComponent } from 'angular2-c360';
import { C360PropComponent } from '../c360-prop';

@Component({
  moduleId: module.id,
  selector: 'app-model',
  templateUrl: 'model.component.html',
  styleUrls: ['model.component.css'],
  providers: [C360ContextService],
  directives: [C360PropComponent,C360ViewerComponent]
})
export class ModelComponent implements OnInit {

  constructor(private _c360Context: C360ContextService) { }

  public trailer:any;

  ngOnInit() {
      return this._c360Context.getNewModel()
        .then((root:any) => {
            this.trailer = root;
        });
 }
}
