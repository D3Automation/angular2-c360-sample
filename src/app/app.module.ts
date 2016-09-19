import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routes';

import { AngularC360Module } from 'angular2-c360';

import { AppComponent } from './app.component';
import { C360PropComponent } from './c360-prop';
import { ErrorComponent } from './error';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { ModelComponent } from './model';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularC360Module
  ],
  declarations: [
    AppComponent,
    C360PropComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    ModelComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }