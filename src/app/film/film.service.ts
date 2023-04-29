import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../api';
import { FilmRepository } from './film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  /* getPlanet(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${API}/planets/${id}`);
  } */
  getFilm(url?: URL): Observable<FilmRepository> {
    return this.http
      .get<FilmRepository>(url ? url.toString() : `${API}/films`)
    
  }

}
