import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from './film.service';
import { Observable } from 'rxjs';
import { FilmRepository } from './film.model';
import { Router } from '@angular/router';

@Component({
  selector: 'code-challenge-angular-planet',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  film$?: Observable<FilmRepository>;
  constructor(
    private service: FilmService, private router: Router
  ) {}

/*   ngOnInit(): void {
     this.planet$ = this.service.getPlanet(
      this.activatedRoute.snapshot.params['id']
    ); 
  } */

  ngOnInit(): void {
    this.loadFilm();
  }

  loadFilm(url?: URL) {
    this.film$ = this.service.getFilm(url);
  }
}
