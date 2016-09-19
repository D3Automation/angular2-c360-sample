import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { C360ContextService } from 'angular2-c360';

@Component({
  selector: 'app-model',
  templateUrl: 'model.component.html',
  styleUrls: ['model.component.css']
})
export class ModelComponent implements OnInit {
  constructor(private c360Context: C360ContextService) { }

  public rootPart:any;

  ngOnInit() {
    this.c360Context.model.subscribe(root => this.rootPart = root);
  }
}
