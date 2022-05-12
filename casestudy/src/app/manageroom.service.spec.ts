import { TestBed } from '@angular/core/testing';

import { ManageroomService } from './manageroom.service';

describe('ManageroomService', () => {
  let service: ManageroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
