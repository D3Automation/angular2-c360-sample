import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routes';

import { AngularC360Module } from 'angular2-c360';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { ModelComponent } from './model';
import { C360PropComponent } from './c360-prop';

@NgModule({
  imports: [ BrowserModule, routing, AngularC360Module ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, ModelComponent, C360PropComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }