import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Starship, StarshipRepository } from './starship.model';
import { API } from '../api';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  constructor(private http: HttpClient) {}

  getStarship(url?: URL): Observable<StarshipRepository> {
    return this.http
      .get<StarshipRepository>(url ? url.toString() : `${API}/starships`)
      .pipe(
        map((repository: StarshipRepository) => {
          repository.results.map((starship: Starship) => {
            
            starship.pilots.map((people: URL) => {
              people = new URL(people);
              return people;
            });
            starship.films.map((film: URL) => {
              film = new URL(film);
              return film;
            });

            return starship;
          });
          return repository;
        })
      );
  }
}
