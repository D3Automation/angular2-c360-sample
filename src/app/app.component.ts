import { Component } from '@angular/core';
import { C360ContextService } from 'angular2-c360';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(private c360Context: C360ContextService) {}

  get isBusy(): boolean {
    return this.c360Context.isBusy;
  }
}
