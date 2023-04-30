import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { People, PeopleRepository } from './people.model';
import { API } from '../api';
import { Film } from '../film/film.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  getPeople(url?: URL): Observable<PeopleRepository> {
    return this.http
      .get<PeopleRepository>(url ? url.toString() : `${API}/people`)
      .pipe(
        map((repository: PeopleRepository) => {
          repository.results.map((people: People) => {
            people.homeworld = new URL(people.homeworld);

            people.films.map((film: URL) => {
                  film = new URL(film);
                  return film;
            });
            people.species.map((specie: URL) => {
                  specie = new URL(specie);
                  return specie;
            });
            people.vehicles.map((vehicle: URL) => {
                  vehicle = new URL(vehicle);
                  return vehicle;
            });
            people.starships.map((starship: URL) => {
                  starship = new URL(starship);
                  return starship;
            });


            return people;
          });
          return repository;
        })
      );
  }
}
