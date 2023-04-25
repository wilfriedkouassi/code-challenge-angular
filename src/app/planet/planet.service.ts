import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../api';
import { Planet } from './planet.model';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  getPlanet(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${API}/planets/${id}`);
  }
}
