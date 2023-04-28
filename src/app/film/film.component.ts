import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from './film.service';
import { Observable } from 'rxjs';
import { Planet, PlanetRepository } from './film.model';

@Component({
  selector: 'code-challenge-angular-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {
  planet$?: Observable<PlanetRepository>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PlanetService
  ) {}

/*   ngOnInit(): void {
     this.planet$ = this.service.getPlanet(
      this.activatedRoute.snapshot.params['id']
    ); 
  } */

  ngOnInit(): void {
    this.loadPlanet();
  }

  loadPlanet(url?: URL) {
    this.planet$ = this.service.getPlanet(url);
  }
}
