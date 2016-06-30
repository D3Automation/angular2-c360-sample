import { Component, OnInit } from '@angular/core';
import { C360ContextService, C360Model } from 'angular2-c360';

@Component({
  moduleId: module.id,
  selector: 'app-model',
  templateUrl: 'model.component.html',
  styleUrls: ['model.component.css'],
  providers: [C360ContextService,C360Model]
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
