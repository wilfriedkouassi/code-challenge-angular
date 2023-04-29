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

  getVehicle(url?: URL): Observable<VehicleRepository> {
    return this.http
      .get<VehicleRepository>(url ? url.toString() : `${API}/vehicles`)
      /* .pipe(
        map((repository: VehicleRepository) => {
          repository.results.map((vehicle: Vehicle) => {
            vehicle.homeworld = new URL(vehicle.homeworld);
            return vehicle;
          });
          return repository;
        })
      ); */
  }
}
