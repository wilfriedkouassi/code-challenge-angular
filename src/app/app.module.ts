import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { PeopleComponent } from './people/people.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetComponent } from './planet/planet.component';

@NgModule({
  declarations: [AppComponent, PeopleComponent, PlanetComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
