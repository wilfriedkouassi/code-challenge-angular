import { Route } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PlanetComponent } from './planet/planet.component';
import { FilmComponent } from './film/film.component';
import { SpecieComponent } from './specie/specie.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { StarshipComponent } from './starship/starship.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: StarshipComponent, //VehicleComponent, // SpecieComponent, //FilmComponent, //PlanetComponent,
    //component: PeopleComponent,
  },
  {
    path: 'planets/:id',
    component: PlanetComponent,
  },
];
