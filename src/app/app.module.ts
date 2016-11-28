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
import { LoggingModelAdapter } from './logging-model-adapter';
import { ModelNoGraphicsComponent } from './model-no-graphics/model-no-graphics.component';
import { ModelGraphicsOnlyComponent } from './model-graphics-only/model-graphics-only.component';
import { BusyIndicatorComponent } from './busy-indicator/busy-indicator.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularC360Module.forRoot({designKey: "575458448649916390/2gn1dj1tslb4"}, new LoggingModelAdapter())
  ],
  declarations: [
    AppComponent,
    C360PropComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    ModelComponent, ModelNoGraphicsComponent, ModelGraphicsOnlyComponent, BusyIndicatorComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }