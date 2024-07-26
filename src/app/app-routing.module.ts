import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ManageAccommodationsComponent } from './admin/manage-accommodations/manage-accommodations.component';
import { ManageEventsComponent } from './admin/manage-events/manage-events.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ManageDestinationsComponent } from './admin/manage-destinations/manage-destinations.component';
import { AccommodationEditComponent } from './admin/manage-accommodations/accommodation-edit/accommodation-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Add the home route
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'manage-destinations', component: ManageDestinationsComponent },
      { path: 'manage-events', component: ManageEventsComponent },
      { path: 'manage-users', component: ManageUsersComponent },
      {path :'manage-accommodations', component : ManageAccommodationsComponent},
      { path: 'manage-accommodations/:destinationId', component: ManageAccommodationsComponent }, // Route for accommodations by destination
      { path: 'manage-accommodations/edit/:id', component: AccommodationEditComponent }, // Route for editing accommodation

      { path: '', redirectTo: 'manage-destinations', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
