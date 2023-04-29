import { Component, OnInit } from '@angular/core';
import { SpecieService } from './specie.service';
import { Observable } from 'rxjs';
import { SpecieRepository } from './specie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'code-challenge-angular-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss'],
})
export class SpecieComponent implements OnInit {
  specie$?: Observable<SpecieRepository>;

  constructor(private service: SpecieService, private router: Router) {}

  ngOnInit(): void {
    this.loadSpecie();
  }

  loadSpecie(url?: URL) {
    this.specie$ = this.service.getSpecie(url);
  }
/* 
  toPlanet(specie: URL) {
    console.log(specie);
    const parts = specie.toString().split('/');
    this.router.navigateByUrl(`species/${parts.pop() || parts.pop()}`);
  } */
}
