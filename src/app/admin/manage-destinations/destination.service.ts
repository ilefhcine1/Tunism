import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Destination } from './destination.model';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private apiUrl = 'http://localhost:8081/api/destinations';
  public imageBaseUrl = 'http://localhost:8081/images';

  constructor(private http: HttpClient) { }

  getAllDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.apiUrl).pipe(
      map(destinations => destinations.map(destination => {
        if (destination.photoUrl && !destination.photoUrl.startsWith('http')) {
          // Remove any leading slashes and ensure single '/images/' in the URL
          const formattedPhotoUrl = destination.photoUrl.replace(/^\/+/, '');
          destination.photoUrl = `${this.imageBaseUrl}/${formattedPhotoUrl}`;
        }
        return destination;
      }))
    );
  }

  // Create a new destination with a JSON object
  createDestination(destination: Destination): Observable<Destination> {
    return this.http.post<Destination>(this.apiUrl, destination);
  }

  // Update an existing destination with a JSON object
  updateDestination(id: number, destination: Destination): Observable<Destination> {
    return this.http.put<Destination>(`${this.apiUrl}/${id}`, destination); // Use backticks here
  }

  // Create a new destination with a file upload (FormData)
  createDestinationWithFile(formData: FormData): Observable<Destination> {
    return this.http.post<Destination>(this.apiUrl, formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    });
  }

  // Update an existing destination with a file upload (FormData)
  updateDestinationWithFile(id: number, formData: FormData): Observable<Destination> {
    return this.http.put<Destination>(`${this.apiUrl}/${id}`, formData, { // Use backticks here
      headers: {
        'Accept': 'application/json'
      }
    });
  }

  // Delete a destination
  deleteDestination(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // Use backticks here
  }
}
