import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { ModelComponent } from './model';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent]
})
export class AppComponent {
  title = 'app works!';
}
