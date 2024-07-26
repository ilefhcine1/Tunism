import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { OwnerPageComponent } from './pages/owner-page/owner-page.component';


@NgModule({
  declarations: [
    OwnerComponent,
    OwnerPageComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
