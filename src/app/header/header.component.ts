import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
  ];  selectedCity: string = ''; // To store the selected city

  // Method to toggle the visibility of the city dropdown
  toggleDropdown() {
    const dropdownMenu = document.getElementById('destinationDropdown');
    dropdownMenu?.classList.toggle('show');
  }

  // Method to select a city from the dropdown
  selectCity(city: string) {
    this.selectedCity = city;
    this.toggleDropdown(); // Hide the dropdown after selecting a city (optional)
  }

  // Other methods like onSignIn, onSignUp, increase, decrease
  onSignIn() {
    // Navigate to Sign In page or show Sign In modal
  }

  onSignUp() {
    // Navigate to Sign Up page or show Sign Up modal
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
