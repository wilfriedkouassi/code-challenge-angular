import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { People, PeopleRepository } from './people.model';
import { API } from '../api';

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
            return people;
          });
          return repository;
        })
      );
  }
}
