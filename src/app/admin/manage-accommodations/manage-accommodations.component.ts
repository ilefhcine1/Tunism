// manage-accommodations.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccommodationService } from './accommodation.service'; // Adjust the path if needed
import { Accommodation } from './accommodation.model'; // Adjust the path if needed

@Component({
  selector: 'app-manage-accommodations',
  templateUrl: './manage-accommodations.component.html',
  styleUrls: ['./manage-accommodations.component.css']
})
export class ManageAccommodationsComponent implements OnInit {
  accommodations: Accommodation[] = [];
  destinationId!: number;
  noAccommodations: boolean = false;

  constructor(
    private accommodationService: AccommodationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.destinationId = +this.route.snapshot.paramMap.get('destinationId')!;
    this.accommodationService.getAllAccommodations().subscribe(
      (data) => {
        this.accommodations = data.filter(accom => accom.destination.id === this.destinationId);
        this.noAccommodations = this.accommodations.length === 0; // Set flag if no accommodations
      },
      (error) => {
        console.error('Error fetching accommodations:', error);
      }
    );
  }

  editAccommodation(id: number): void {
    this.router.navigate([`/admin/manage-accommodations/edit/${id}`]);
  }

  deleteAccommodation(id: number): void {
    this.accommodationService.deleteAccommodation(id).subscribe(
      () => {
        this.accommodations = this.accommodations.filter(accom => accom.id !== id);
        this.noAccommodations = this.accommodations.length === 0; // Update flag after deletion
      },
      (error) => {
        console.error('Error deleting accommodation:', error);
      }
    );
  }
}
