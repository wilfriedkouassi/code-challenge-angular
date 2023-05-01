import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Specie, SpecieRepository } from './specie.model';
import { API } from '../api';

@Injectable({
  providedIn: 'root',
})
export class SpecieService {
  constructor(private http: HttpClient) {}

  getSpecieById(id: number): Observable<Specie> {
    return this.http.get<Specie>(`${API}/species/${id}`);
  } 

  getSpecie(url?: URL): Observable<SpecieRepository> {
    return this.http
      .get<SpecieRepository>(url ? url.toString() : `${API}/species`)
      .pipe(
        map((repository: SpecieRepository) => {
          repository.results.map((specie: Specie) => {           
           
            specie.url = new URL(specie.url);
            
            specie.people.map((people: URL) => {
                  people = new URL(people);
                  return people;
            });
            specie.films.map((film: URL) => {
                  film = new URL(film);
                  return film;
            });

            return specie;
          });
          return repository;
        })
      );   
  }
}
