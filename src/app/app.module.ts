import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ManageDestinationsComponent } from './admin/manage-destinations/manage-destinations.component';
import { ManageAccommodationsComponent } from './admin/manage-accommodations/manage-accommodations.component';
import { ManageEventsComponent } from './admin/manage-events/manage-events.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AccommodationEditComponent } from './admin/manage-accommodations/accommodation-edit/accommodation-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    ManageDestinationsComponent,
    ManageAccommodationsComponent,
    ManageEventsComponent,
    ManageUsersComponent,
    AccommodationEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    HttpClientModule // Add HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
