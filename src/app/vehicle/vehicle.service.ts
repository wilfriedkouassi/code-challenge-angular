import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Vehicle, VehicleRepository } from './vehicle.model';
import { API } from '../api';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehicleById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${API}/vehicles/${id}`);
  } 

  getVehicle(url?: URL): Observable<VehicleRepository> {
    return this.http
      .get<VehicleRepository>(url ? url.toString() : `${API}/vehicles`)
      .pipe(
        map((repository: VehicleRepository) => {
          repository.results.map((vehicle: Vehicle) => {           
    
            vehicle.url = new URL(vehicle.url);
            
            vehicle.pilots.map((people: URL) => {
                  people = new URL(people);
                  return people;
            });
            vehicle.films.map((film: URL) => {
                  film = new URL(film);
                  return film;
            });

            return vehicle;
          });
          return repository;
        })
      );   
  }
}
