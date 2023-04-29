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
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetComponent,
    FilmComponent,
    SpecieComponent,
    VehicleComponent,
    StarshipComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
