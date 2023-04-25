import { Route } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PlanetComponent } from './planet/planet.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: PeopleComponent,
  },
  {
    path: 'planets/:id',
    component: PlanetComponent,
  },
];
