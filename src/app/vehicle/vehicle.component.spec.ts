import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleComponent } from './vehicle.component';
import { of } from 'rxjs';
import { VehicleService } from './vehicle.service';

const PEOPLE_MOCK = {
  count: 82,
  next: 'https://swapi.dev/api/vehicles/?page=2',
  previous: null,
  results: [
    {
      name: 'Sand Crawler',
      model: 'Digger Crawler',
      manufacturer: 'Corellia Mining Corporation',
      cost_in_credits: '150000',
      length: '36.8 ',
      max_atmosphering_speed: '30',
      crew: '46',
      passengers: '30',
      cargo_capacity: '50000',
      consumables: '2 months',
      vehicle_class: 'wheeled',
      pilots: [],
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/5/',
      ],
      created: '2014-12-10T15:36:25.724000Z',
      edited: '2014-12-20T21:30:21.661000Z',
      url: 'https://swapi.dev/api/vehicles/4/',
    },
  ],
};

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  const service = {
    getPeople: () => of(PEOPLE_MOCK),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleComponent],
      providers: [
        {
          provide: VehicleService,
          useValue: service,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
