import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Accommodation } from './accommodation.model';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  private apiUrl = 'http://localhost:8081/api/accommodations';

  constructor(private http: HttpClient) { }

  getAllAccommodations(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(this.apiUrl);
  }

  getAccommodationById(id: number): Observable<Accommodation> {
    return this.http.get<Accommodation>(`${this.apiUrl}/${id}`) // Use backticks here
    .pipe(
      catchError(error => {
        console.error('Error fetching accommodation:', error);
        return throwError(error); // Rethrow the error to propagate it to the component
      })
    );
  }

  editAccommodation(id: number, accommodation: Accommodation): Observable<Accommodation> {
    return this.http.put<Accommodation>(`${this.apiUrl}/${id}`, accommodation) // Use backticks here
    .pipe(
      catchError(error => {
        console.error('Error updating accommodation:', error);
        return throwError(error); // Rethrow the error to propagate it to the component
      })
    );
  }

  deleteAccommodation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`) // Use backticks here
    .pipe(
      catchError(error => {
        console.error('Error deleting accommodation:', error);
        return throwError(error); // Rethrow the error to propagate it to the component
      })
    );
  }

  getAccommodationsByCity(city: string): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(`${this.apiUrl}/accommodations?city=${city}`) // Use backticks here
  }
}
