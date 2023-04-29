import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { PeopleComponent } from './people/people.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetComponent } from './planet/planet.component';
import { FilmComponent } from './film/film.component';
import { SpecieComponent } from './specie/specie.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { StarshipComponent } from './starship/starship.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetComponent,
    FilmComponent,
    SpecieComponent,
    VehicleComponent,
    StarshipComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
