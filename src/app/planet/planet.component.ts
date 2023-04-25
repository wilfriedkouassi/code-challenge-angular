import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from './planet.service';
import { Observable } from 'rxjs';
import { Planet } from './planet.model';

@Component({
  selector: 'code-challenge-angular-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {
  planet$?: Observable<Planet>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PlanetService
  ) {}

  ngOnInit(): void {
    this.planet$ = this.service.getPlanet(
      this.activatedRoute.snapshot.params['id']
    );
  }
}
