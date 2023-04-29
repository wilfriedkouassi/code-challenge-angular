import { Route } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PlanetComponent } from './planet/planet.component';
import { FilmComponent } from './film/film.component';
import { SpecieComponent } from './specie/specie.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { StarshipComponent } from './starship/starship.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'home',
    component: PeopleComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },

  {
    path: 'starships',
    component: StarshipComponent ,
  },
  {
    path: 'people',
    component: PeopleComponent,
  },
  {
    path: 'films',
    component: FilmComponent, 
   
  },
  {
    path: 'species',
    component: SpecieComponent,
  },
  {
    path: 'planets',
    component: PlanetComponent,
  },
  {
    path: 'vehicles',
    component: VehicleComponent, 
  },
  {
    path: 'planets/:id',
    component: PlanetComponent,
  },
];
