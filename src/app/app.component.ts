import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { ModelComponent } from './model';
import { C360ContextService } from 'angular2-c360';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [C360ContextService],
  directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent]
})
export class AppComponent {
  constructor(private c360Context: C360ContextService) {
    c360Context.setDesignKey("575458448649916390/2gn1dj1tslb4");
  }
}
