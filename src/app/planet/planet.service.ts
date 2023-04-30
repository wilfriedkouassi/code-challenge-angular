import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { API } from '../api';
import { Planet, PlanetRepository } from './planet.model';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  getPlanetWithId(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${API}/planets/${id}`);
  } 
  getPlanet(url?: URL): Observable<PlanetRepository> {
    return this.http
      .get<PlanetRepository>(url ? url.toString() : `${API}/planets`)
      .pipe(
        map((repository: PlanetRepository) => {
          repository.results.map((planet: Planet) => {           

            planet.residents.map((people: URL) => {
                  people = new URL(people);
                  return people;
            });
            planet.films.map((film: URL) => {
                  film = new URL(film);
                  return film;
            });

            return planet;
          });
          return repository;
        })
      );
  }

}
