import { TestBed } from '@angular/core/testing';

import { ManagestaffService } from './managestaff.service';

describe('ManagestaffService', () => {
  let service: ManagestaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagestaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
