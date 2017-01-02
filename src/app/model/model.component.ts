import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { C360ContextService, UIPart } from 'angular2-c360';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  constructor(private c360Context: C360ContextService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public part:UIPart;

  ngOnInit() {
    this.route.data.forEach((data: { part: UIPart }) => {
      this.part = data.part;
    });
    //this.c360Context.model.subscribe(root => this.rootPart = root);
  }
}
