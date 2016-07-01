import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'c360-prop',
  templateUrl: 'c360-prop.component.html',
  styleUrls: ['c360-prop.component.css']
})
export class C360PropComponent {
  @Input()
  uiProp: any;
}
