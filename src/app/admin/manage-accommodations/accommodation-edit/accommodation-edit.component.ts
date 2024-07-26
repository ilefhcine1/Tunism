// src/app/admin/manage-accommodations/accommodation-edit/accommodation-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Accommodation } from '../accommodation.model';
import { AccommodationService } from '../accommodation.service';

@Component({
  selector: 'app-accommodation-edit',
  templateUrl: './accommodation-edit.component.html',
  styleUrls: ['./accommodation-edit.component.css']
})
export class AccommodationEditComponent implements OnInit {
  
  accommodation: Accommodation = {
    id: 0,
    name: '',
    description: '',
    type: '',
    destination: { id: 0, name: '' }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accommodationService: AccommodationService
  ) { }

  ngOnInit(): void {
    const accommodationId = +this.route.snapshot.paramMap.get('id')!;
    if (accommodationId) {
      this.accommodationService.getAccommodationById(accommodationId).subscribe(
        (data) => {
          this.accommodation = data;
        },
        (error) => {
          console.error('Error fetching accommodation:', error);
        }
      );
    }
  }

  save(): void {
    // Implement save functionality
    console.log('Saving accommodation:', this.accommodation);
  }
}
