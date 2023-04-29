import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { Observable } from 'rxjs';
import { VehicleRepository } from './vehicle.model';
import { Router } from '@angular/router';

@Component({
  selector: 'code-challenge-angular-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  vehicle$?: Observable<VehicleRepository>;

  constructor(private service: VehicleService, private router: Router) {}

  ngOnInit(): void {
    this.loadVehicle();
  }

  loadVehicle(url?: URL) {
    this.vehicle$ = this.service.getVehicle(url);
  }

  /* toPlanet(planet: URL) {
    console.log(planet);
    const parts = planet.toString().split('/');
    this.router.navigateByUrl(`planets/${parts.pop() || parts.pop()}`);
  } */
}
