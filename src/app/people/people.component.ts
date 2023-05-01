import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs';
import { People, PeopleRepository } from './people.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'code-challenge-angular-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people$?: Observable<PeopleRepository>;
  people2$?: Observable<People>;
  constructor(private activatedRoute: ActivatedRoute, private service: PeopleService, private router: Router) {}

  ngOnInit(): void {
    !this.activatedRoute.snapshot.params['id'] ? this.loadPeople() : this.loadPeople2();
  }

  loadPeople2(): void {    
    this.people2$ = this.service.getPeopleById(
      this.activatedRoute.snapshot.params['id']
    );
  }

  loadPeople(url?: URL) {
    this.people$ = this.service.getPeople(url);
  }

  toPeople(people_url: URL) {
    const parts = people_url.toString().split('/');
    this.router.navigateByUrl(`people/${parts.pop() || parts.pop()}`);
  }

  toPlanet(planet: URL) {
    console.log(planet);
    const parts = planet.toString().split('/');
    this.router.navigateByUrl(`planets/${parts.pop() || parts.pop()}`);
  }

  toFilm(film: URL) {
    console.log(film);
    const parts = film.toString().split('/');
    this.router.navigateByUrl(`films/${parts.pop() || parts.pop()}`);
  }
  
  toSpecie(specie: URL) {
    console.log(specie);
    const parts = specie.toString().split('/');
    this.router.navigateByUrl(`species/${parts.pop() || parts.pop()}`);
  }
  toVehicle(vehicle: URL) {
    console.log(vehicle);
    const parts = vehicle.toString().split('/');
    this.router.navigateByUrl(`vehicles/${parts.pop() || parts.pop()}`);
  }

  toStarship(starship: URL) {
    console.log(starship);
    const parts = starship.toString().split('/');
    this.router.navigateByUrl(`starships/${parts.pop() || parts.pop()}`);
  }
}
