import { Component, OnInit } from '@angular/core';
import { StarshipService } from './starship.service';
import { Observable } from 'rxjs';
import { Starship, StarshipRepository } from './starship.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'code-challenge-angular-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss'],
})
export class StarshipComponent implements OnInit {
  starship$?: Observable<StarshipRepository>;
  starship2$?: Observable<Starship>;

  constructor(private activatedRoute: ActivatedRoute,private service: StarshipService, private router: Router) {}

  ngOnInit(): void {
    !this.activatedRoute.snapshot.params['id'] ? this.loadStarship() : this.loadStarship2();
  }

  loadStarship(url?: URL) {
    this.starship$ = this.service.getStarship(url);
  }
  loadStarship2() {
    this.starship2$ = this.service.getStarshipById(
      this.activatedRoute.snapshot.params['id']
    );
  }
  toStarship(starship: URL) {
    const parts = starship.toString().split('/');
    this.router.navigateByUrl(`starships/${parts.pop() || parts.pop()}`);
  }

  toVehicle(vehicle: URL) {
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
