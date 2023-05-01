import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from './film.service';
import { Observable } from 'rxjs';
import { Film, FilmRepository } from './film.model';
import { Router } from '@angular/router';

@Component({
  selector: 'code-challenge-angular-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  film$?: Observable<FilmRepository>;
  film2$?: Observable<Film>;

  constructor(
    private service: FilmService, private router: Router, private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    !this.activatedRoute.snapshot.params['id'] ? this.loadFilm() : this.loadFilm2();
  }

  loadFilm(url?: URL) {
    this.film$ = this.service.getFilm(url);
  }
  loadFilm2() {
    this.film2$ = this.service.getFilmById(
      this.activatedRoute.snapshot.params['id']
    );
  }

  toFilm(film: URL) {
    console.log(film);
    const parts = film.toString().split('/');
    this.router.navigateByUrl(`films/${parts.pop() || parts.pop()}`);
  }
  toPeople(people: URL) {
    console.log(people);
    const parts = people.toString().split('/');
    this.router.navigateByUrl(`people/${parts.pop() || parts.pop()}`);
  }

  toPlanet(planet: URL) {
    console.log(planet);
    const parts = planet.toString().split('/');
    this.router.navigateByUrl(`planets/${parts.pop() || parts.pop()}`);
  }
  toStarship(starship: URL) {
    console.log(starship);
    const parts = starship.toString().split('/');
    this.router.navigateByUrl(`starships/${parts.pop() || parts.pop()}`);
  }
  
  toVehicle(vehicle: URL) {
    console.log(vehicle);
    const parts = vehicle.toString().split('/');
    this.router.navigateByUrl(`vehicles/${parts.pop() || parts.pop()}`);
  }

  toSpecie(specie: URL) {
    console.log(specie);
    const parts = specie.toString().split('/');
    this.router.navigateByUrl(`species/${parts.pop() || parts.pop()}`);
  }


}
