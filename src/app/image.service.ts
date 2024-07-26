import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getImageUrl(): Observable<string> {
    return this.http.get<string>('http://localhost:8081/images'); // replace with your API URL

  }
}