import { Component, OnInit } from '@angular/core';
import { Observable } from 'RxJs/rx';
import { C360ContextService } from 'angular2-c360';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private c360Context: C360ContextService) {}

  busy: Observable<boolean>;

  ngOnInit() {
    this.busy = this.c360Context.busy;
  }
}
