import { TestBed } from '@angular/core/testing';

import { OwnerloginService } from './ownerlogin.service';

describe('OwnerloginService', () => {
  let service: OwnerloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
