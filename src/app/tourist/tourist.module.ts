import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouristRoutingModule } from './tourist-routing.module';
import { TouristComponent } from './tourist.component';
import { TouristPageComponent } from './pages/tourist-page/tourist-page.component';
import { AccommodationComponent } from './accommodation/accommodation.component';


@NgModule({
  declarations: [
    TouristComponent,
    TouristPageComponent,
    AccommodationComponent
  ],
  imports: [
    CommonModule,
    TouristRoutingModule
  ]
})
export class TouristModule { }
