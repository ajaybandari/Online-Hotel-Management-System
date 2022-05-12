import { TestBed } from '@angular/core/testing';

import { InventorymanagementService } from './inventorymanagement.service';

describe('InventorymanagementService', () => {
  let service: InventorymanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventorymanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
