import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetComponent } from './planet.component';
import { PlanetService } from './planet.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

const PLANET_MOCK = {
  name: 'Kashyyyk',
  rotation_period: '26',
  orbital_period: '381',
  diameter: '12765',
  climate: 'tropical',
  gravity: '1 standard',
  terrain: 'jungle, forests, lakes, rivers',
  surface_water: '60',
  population: '45000000',
  residents: [
    'https://swapi.dev/api/people/13/',
    'https://swapi.dev/api/people/80/',
  ],
  films: ['https://swapi.dev/api/films/6/'],
  created: '2014-12-10T13:32:00.124000Z',
  edited: '2014-12-20T20:58:18.442000Z',
  url: 'https://swapi.dev/api/planets/14/',
};

describe('PlanetComponent', () => {
  let component: PlanetComponent;
  let fixture: ComponentFixture<PlanetComponent>;

  const service = {
    getPlanet: () => of(PLANET_MOCK),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PlanetComponent],
      providers: [
        {
          provide: PlanetService,
          useValue: service,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
