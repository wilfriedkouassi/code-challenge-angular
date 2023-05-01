import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { Observable } from 'rxjs';
import { Vehicle, VehicleRepository } from './vehicle.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'code-challenge-angular-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  vehicle$?: Observable<VehicleRepository>;
  vehicle2$?: Observable<Vehicle>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: VehicleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    !this.activatedRoute.snapshot.params['id']
      ? this.loadVehicle()
      : this.loadVehicle2();
  }

  loadVehicle(url?: URL) {
    this.vehicle$ = this.service.getVehicle(url);
  }
  loadVehicle2() {
    this.vehicle2$ = this.service.getVehicleById(
      this.activatedRoute.snapshot.params['id']
    );
  }

  toVehicle(vehicle: URL) {
    console.log(vehicle);
    const parts = vehicle.toString().split('/');
    this.router.navigateByUrl(`vehicles/${parts.pop() || parts.pop()}`);
  }

  toPeople(people_url: URL) {
    const parts = people_url.toString().split('/');
    this.router.navigateByUrl(`people/${parts.pop() || parts.pop()}`);
  }

  toFilm(film: URL) {
    console.log(film);
    const parts = film.toString().split('/');
    this.router.navigateByUrl(`films/${parts.pop() || parts.pop()}`);
  }
}
