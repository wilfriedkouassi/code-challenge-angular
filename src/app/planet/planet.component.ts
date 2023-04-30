import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from './planet.service';
import { Observable } from 'rxjs';
import { Planet, PlanetRepository } from './planet.model';

@Component({
  selector: 'code-challenge-angular-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {
  planet$?: Observable<PlanetRepository>;
  planet2$?: Observable<Planet>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PlanetService
  ) {}

  loadPlanet2(): void {
     this.planet2$ = this.service.getPlanetWithId(
      this.activatedRoute.snapshot.params['id']
    ); 
  } 
  
  ngOnInit(): void {
    this.planet$ ?  this.loadPlanet() : this.loadPlanet2();
   
  }

  loadPlanet(url?: URL) {
    this.planet$ = this.service.getPlanet(url);
  }
}
