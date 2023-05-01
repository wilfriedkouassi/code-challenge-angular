import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from './planet.service';
import { Observable } from 'rxjs';
import { Planet, PlanetRepository } from './planet.model';
import { Router } from '@angular/router';

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
    private service: PlanetService,
    private router: Router
  ) {}

  loadPlanet2(): void {    
    this.planet2$ = this.service.getPlanetById(
      this.activatedRoute.snapshot.params['id']
    );
  }

  loadPlanet(url?: URL) {
    this.planet$ = this.service.getPlanet(url);
  }

  ngOnInit(): void {    
    !this.activatedRoute.snapshot.params['id'] ? this.loadPlanet() : this.loadPlanet2();
  }
  toPlanet(planet: URL) {
    console.log(planet);
    const parts = planet.toString().split('/');
    this.router.navigateByUrl(`planets/${parts.pop() || parts.pop()}`);
  }

  toPeople(people: URL) {
    console.log(people);
    const parts = people.toString().split('/');
    this.router.navigateByUrl(`people/${parts.pop() || parts.pop()}`);
  }
  toFilm(film: URL) {
    console.log(film);
    const parts = film.toString().split('/');
    this.router.navigateByUrl(`films/${parts.pop() || parts.pop()}`);
  }
}
