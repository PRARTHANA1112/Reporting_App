import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { CrewManagementComponent } from './components/crew-management/crew-management.component';
import { TimeSlotComponent } from './components/time-slot/time-slot.component';
import { TimeSlotDirective } from './directives/time-slot.directive';

@NgModule({
  declarations: [
    AppComponent,
    AssetDetailsComponent,
    WeatherDetailsComponent,
    CrewManagementComponent,
    TimeSlotComponent,
    TimeSlotDirective
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
