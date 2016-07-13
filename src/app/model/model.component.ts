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

  public rootPart:any;

  ngOnInit() {
    this.c360Context.model.subscribe(root => this.rootPart = root);
  }
}
