import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationService } from './destination.service';
import { Destination } from './destination.model';

@Component({
  selector: 'app-manage-destinations',
  templateUrl: './manage-destinations.component.html',
  styleUrls: ['./manage-destinations.component.css']
})
export class ManageDestinationsComponent implements OnInit {
  destinations: Destination[] = [];
  showAddDestinationForm: boolean = false;
  newDestination: Destination = new Destination('');
  editingDestination: Destination | null = null; // State for editing
  currentDestination: Destination = new Destination(''); // For form binding
  selectedFile: File | null = null;

  constructor(
    private router: Router,
    private destinationService: DestinationService
  ) { }

  ngOnInit(): void {
    this.destinationService.getAllDestinations().subscribe(destinations => {
      this.destinations = destinations;
      console.log(this.destinations); // Log destinations to check URLs
    });
  }

  toggleAddDestinationForm(destination?: Destination) {
    if (destination) {
      this.editingDestination = { ...destination };
      this.currentDestination = this.editingDestination; // Set form data for editing
    } else {
      this.editingDestination = null;
      this.currentDestination = new Destination('');
    }
    this.showAddDestinationForm = !this.showAddDestinationForm;
    this.selectedFile = null;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
    }
  }

  submitDestination() {
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }
    formData.append('destination', new Blob([JSON.stringify(this.currentDestination)], { type: 'application/json' }));
  
    if (this.editingDestination) {
      this.destinationService.updateDestinationWithFile(this.currentDestination.id!, formData).subscribe(
        data => {
          const index = this.destinations.findIndex(dest => dest.id === data.id);
          if (index !== -1) {
            this.destinations[index] = data;
          }
          this.toggleAddDestinationForm();
        },
        error => {
          console.log('Error updating destination:', error);
        }
      );
    } else {
      this.destinationService.createDestinationWithFile(formData).subscribe(
        data => {
          data.photoUrl = `${this.destinationService.imageBaseUrl}${data.photoUrl}`;
          this.destinations.push(data);
          this.toggleAddDestinationForm();
        },
        error => {
          console.log('Error adding destination:', error);
        }
      );
    }
  }

  editDestination(id: number) {
    const destination = this.destinations.find(dest => dest.id === id);
    if (destination) {
      this.toggleAddDestinationForm(destination);
    }
  }

  deleteDestination(id: number): void {
    this.destinationService.deleteDestination(id).subscribe({
      next: () => {
        this.destinations = this.destinations.filter(dest => dest.id !== id);
      },
      error: err => {
        console.error('Error deleting destination', err);
        alert('Failed to delete destination');
      }
    });
  }

  viewAccommodations(destinationId: number): void {
    this.router.navigate([`/admin/manage-accommodations`, destinationId]);
  }
}
