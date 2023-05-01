import { Component, OnInit } from '@angular/core';
import { SpecieService } from './specie.service';
import { Observable } from 'rxjs';
import { Specie, SpecieRepository } from './specie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'code-challenge-angular-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss'],
})
export class SpecieComponent implements OnInit {
  specie$?: Observable<SpecieRepository>;
  specie2$?: Observable<Specie>;

  constructor(   private activatedRoute: ActivatedRoute, private service: SpecieService, private router: Router) {}

  ngOnInit(): void {
   !this.activatedRoute.snapshot.params['id'] ? this.loadSpecie() : this.loadSpecie2();
  }

  loadSpecie(url?: URL) {
    this.specie$ = this.service.getSpecie(url);
  }

  loadSpecie2() {
    this.specie2$ = this.service.getSpecieById(
      this.activatedRoute.snapshot.params['id']
    );
  }

  toSpecie(specie: URL) {
    const parts = specie.toString().split('/');
    this.router.navigateByUrl(`species/${parts.pop() || parts.pop()}`);
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
