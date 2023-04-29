import { Component, OnInit } from '@angular/core';
import { StarshipService } from './starship.service';
import { Observable } from 'rxjs';
import { StarshipRepository } from './starship.model';
import { Router } from '@angular/router';

@Component({
  selector: 'code-challenge-angular-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss'],
})
export class StarshipComponent implements OnInit {
  starship$?: Observable<StarshipRepository>;

  constructor(private service: StarshipService, private router: Router) {}

  ngOnInit(): void {
    this.loadStarship();
  }

  loadStarship(url?: URL) {
    this.starship$ = this.service.getStarship(url);
  }

  /* toPlanet(planet: URL) {
    console.log(planet);
    const parts = planet.toString().split('/');
    this.router.navigateByUrl(`planets/${parts.pop() || parts.pop()}`);
  } */
}
