import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { ModelComponent } from './model';

@Component({
  moduleId: module.id,
  selector: 'angular2-c360-sample-app',
  templateUrl: 'angular2-c360-sample.component.html',
  styleUrls: ['angular2-c360-sample.component.css'],
  directives: [ROUTER_DIRECTIVES,ModelComponent,HeaderComponent,FooterComponent]
})
@Routes([
  {
    path: '/model',
    component: ModelComponent
  }
])
export class Angular2C360SampleAppComponent {
  title = 'angular2-c360-sample works!';
}
