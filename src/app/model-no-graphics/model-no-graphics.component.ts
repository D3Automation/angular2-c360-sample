import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { C360ContextService } from 'angular2-c360';

@Component({
  selector: 'app-model-no-graphics',
  templateUrl: './model-no-graphics.component.html',
  styleUrls: ['./model-no-graphics.component.css']
})
export class ModelNoGraphicsComponent implements OnInit {
  constructor(private c360Context: C360ContextService) { }

  public rootPart:any;

  ngOnInit() {
    this.c360Context.model.subscribe(root => this.rootPart = root);
  }
}
