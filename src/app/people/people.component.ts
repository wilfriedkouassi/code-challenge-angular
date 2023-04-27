import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs';
import { PeopleRepository } from './people.model';
import { Router } from '@angular/router';

@Component({
  selector: 'code-challenge-angular-main',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people$?: Observable<PeopleRepository>;

  constructor(private service: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(url?: URL) {
    this.people$ = this.service.getPeople(url);
  }

  toPlanet(planet: URL) {
    console.log(planet);
    const parts = planet.toString().split('/');
    this.router.navigateByUrl(`planets/${parts.pop() || parts.pop()}`);
  }
}
