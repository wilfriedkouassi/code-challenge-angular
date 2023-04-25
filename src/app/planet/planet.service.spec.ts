import { TestBed } from '@angular/core/testing';

import { PlanetService } from './planet.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlanetService', () => {
  let service: PlanetService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(PlanetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
