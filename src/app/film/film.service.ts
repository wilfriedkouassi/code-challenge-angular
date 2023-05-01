import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,Observable } from 'rxjs';
import { API } from '../api';
import { Film, FilmRepository } from './film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(`${API}/films/${id}`);
  }


  getFilm(url?: URL): Observable<FilmRepository> {
    return this.http
      .get<FilmRepository>(url ? url.toString() : `${API}/films`)
      .pipe(
        map((repository: FilmRepository) => {
          repository.results.map((film: Film) => {           

            film.url = new URL(film.url);
            
            film.characters.map((people: URL) => {
                  people = new URL(people);
                  return people;
            });
            film.planets.map((planet: URL) => {
                  planet = new URL(planet);
                  return planet;
            });
            film.vehicles.map((vehicle: URL) => {
                  vehicle = new URL(vehicle);
                  return vehicle;
            });
            film.starships.map((starship: URL) => {
                  starship = new URL(starship);
                  return starship;
            });

            film.species.map((specie: URL) => {
                  specie = new URL(specie);
                  return specie;
            });


            return film;
          });
          return repository;
        })
      );    
  }

}
