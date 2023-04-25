import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleComponent } from './people.component';
import { of } from 'rxjs';
import { PeopleService } from './people.service';

const PEOPLE_MOCK = {
  count: 82,
  next: 'https://swapi.dev/api/people/?page=2',
  previous: null,
  results: [
    {
      name: 'Luke Skywalkerwilli',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: [
        'https://swapi.dev/api/vehicles/14/',
        'https://swapi.dev/api/vehicles/30/',
      ],
      starships: [
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/22/',
      ],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.dev/api/people/1/',
    },
  ],
};

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  const service = {
    getPeople: () => of(PEOPLE_MOCK),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleComponent],
      providers: [
        {
          provide: PeopleService,
          useValue: service,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
