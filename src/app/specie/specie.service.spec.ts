import { TestBed } from '@angular/core/testing';

import { SpecieService } from './specie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PeopleService', () => {
  let service: SpecieService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(SpecieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
