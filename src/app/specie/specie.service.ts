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

  getSpecie(url?: URL): Observable<SpecieRepository> {
    return this.http
      .get<SpecieRepository>(url ? url.toString() : `${API}/species`)
     /*  .pipe(
        map((repository: PeopleRepository) => {
          repository.results.map((people: People) => {
            people.homeworld = new URL(people.homeworld);
            return people;
          });
          return repository;
        })
      ); */
  }
}
