import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecieComponent } from './specie.component';
import { of } from 'rxjs';
import { SpecieService } from './specie.service';

const SPECIE_MOCK = 
{
    count: 37, 
    next: "https://swapi.dev/api/species/?page=2", 
    previous: null, 
    results: [
        {
            name: "Human", 
            classification: "mammal", 
            designation: "sentient", 
            average_height: "180", 
            skin_colors: "caucasian, black, asian, hispanic", 
            hair_colors: "blonde, brown, black, red", 
            eye_colors: "brown, blue, green, hazel, grey, amber", 
            average_lifespan: "120", 
            homeworld: "https://swapi.dev/api/planets/9/", 
            language: "Galactic Basic", 
            people: [
                "https://swapi.dev/api/people/66/", 
                "https://swapi.dev/api/people/67/", 
                "https://swapi.dev/api/people/68/", 
                "https://swapi.dev/api/people/74/"
            ], 
            films: [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/2/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/4/", 
                "https://swapi.dev/api/films/5/", 
                "https://swapi.dev/api/films/6/"
            ], 
            created: "2014-12-10T13:52:11.567000Z", 
            edited: "2014-12-20T21:36:42.136000Z", 
            url: "https://swapi.dev/api/species/1/"
        }, 
      ]
}

describe('SpecieComponent', () => {
  let component: SpecieComponent;
  let fixture: ComponentFixture<SpecieComponent>;

  const service = {
    getPeople: () => of(SPECIE_MOCK),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecieComponent],
      providers: [
        {
          provide: SpecieService,
          useValue: service,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
