import { Component, Input, OnInit } from '@angular/core';
import { UIProperty } from 'angular2-c360';

@Component({
  selector: 'c360-prop',
  templateUrl: 'c360-prop.component.html',
  styleUrls: ['c360-prop.component.css']
})
export class C360PropComponent implements OnInit {
  @Input()
  uiProp: UIProperty;

  @Input()
  labelText: string;

  ngOnInit() {
    if (!this.labelText) {
      this.labelText = this.uiProp.fullName;
    }
  }
}
