import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../api';
import { Planet, PlanetRepository } from './film.model';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  /* getPlanet(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${API}/planets/${id}`);
  } */
  getPlanet(url?: URL): Observable<PlanetRepository> {
    return this.http
      .get<PlanetRepository>(url ? url.toString() : `${API}/planets`)
      .pipe(
        /* map((repository: PlanetRepository) => {
          repository.results.residents.map((planet: Planet) => {
            planet.residents = new URL(planet.residents);
            return planet;
          });
          return repository;
        }) */
      );
  }

}
