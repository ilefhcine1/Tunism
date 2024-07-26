import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import { Destination } from '../admin/manage-destinations/destination.model';
import { Accommodation } from '../admin/manage-accommodations/accommodation.model';
import { DestinationService } from '../admin/manage-destinations/destination.service';
import { AccommodationService } from '../admin/manage-accommodations/accommodation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adults: number = 2;
  children: number = 1;
  rooms: number = 1;
  cities: { name: string }[] = [
    { name: 'Ariana' }, { name: 'Beja' }, { name: 'Ben Gardane' }, { name: 'Bekalta' },
    { name: 'Bizerte' }, { name: 'Djerba Midoun' }, { name: 'Douz' }, { name: 'El Alia' }, { name: 'El Fahs' },
    { name: 'El Jem' }, { name: 'Gabes' }, { name: 'Gafsa' }, { name: 'Hammam Sousse' }, { name: 'Hammam-Lif' },
    { name: 'Hammamet' }, { name: 'Houmt Souk' }, { name: 'Jemmal' }, { name: 'Kairouan' }, { name: 'Kelibia' },
    { name: 'Korba' }, { name: 'La Goulette' }, { name: 'Mahdia' }, { name: 'Maktar' }, { name: 'Masakin' },
    { name: 'Matmata' }, { name: 'Menzel Bourguiba' }, { name: 'Medenine' }, { name: 'Monastir' }, { name: 'Nabeul' },
    { name: 'Sahline' }, { name: 'Siliana' }, { name: 'Sidi Bou Said' }, { name: 'Sousse' }, { name: 'Sfax' },
    { name: 'Tajerouine' }, { name: 'Tataouine' }, { name: 'Tebourba' }, { name: 'Testour' }, { name: 'Tozeur' },
    { name: 'Tinja, Tunisia' }, { name: 'Zaghouan' }, { name: 'Zarzis' }
  ];
  selectedCity: string = ''; // To store the selected city
  destinations: Destination[] = [];
  accommodations: Accommodation[] = [];

  constructor(
    private destinationService: DestinationService,
    private accommodationService: AccommodationService,
    private router: Router // Inject Router
  ) { }

  ngOnInit(): void {
    this.loadDestinations();
    this.loadAccommodations();
  }

 /* loadDestinations(): void {
    this.destinationService.getAllDestinations().subscribe(
      (data) => {
        this.destinations = data;
      },
      (error) => {
        console.error('Error fetching destinations:', error);
      }
    );
  }*/
    loadDestinations(): void {
      this.destinationService.getAllDestinations().subscribe(destinations => {
        this.destinations = destinations;
      });
    }
  

  loadAccommodations(): void {
    this.accommodationService.getAllAccommodations().subscribe(
      (data) => {
        this.accommodations = data;
      },
      (error) => {
        console.error('Error fetching accommodations:', error);
      }
    );
  }

  toggleDropdown() {
    const dropdownMenu = document.getElementById('destinationDropdown');
    dropdownMenu?.classList.toggle('show');
  }

  selectCity(city: string) {
    this.selectedCity = city;
    this.toggleDropdown(); // Hide the dropdown after selecting a city (optional)
  }

  onSignIn() {
    // Navigate to Sign In page or show Sign In modal
  }

  onSignUp() {
    // Navigate to Sign Up page or show Sign Up modal
  }

  viewAccommodations(destinationId?: number): void {
   
  }

  increase(type: string) {
    if (type === 'adults') {
      this.adults++;
    } else if (type === 'children') {
      this.children++;
    } else if (type === 'rooms') {
      this.rooms++;
    }
  }

  decrease(type: string) {
    if (type === 'adults' && this.adults > 1) {
      this.adults--;
    } else if (type === 'children' && this.children > 0) {
      this.children--;
    } else if (type === 'rooms' && this.rooms > 1) {
      this.rooms--;
    }
  }
}
