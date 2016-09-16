import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularC360Module } from 'angular2-c360';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, AngularC360Module ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }