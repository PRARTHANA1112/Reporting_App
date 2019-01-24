import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { CrewManagementComponent } from './components/crew-management/crew-management.component';


@NgModule({
  declarations: [
    AppComponent,
    AssetDetailsComponent,
    WeatherDetailsComponent,
    CrewManagementComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
