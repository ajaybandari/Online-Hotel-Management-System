import { TestBed } from '@angular/core/testing';

import { MakereservationsService } from './makereservations.service';

describe('MakereservationsService', () => {
  let service: MakereservationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakereservationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
