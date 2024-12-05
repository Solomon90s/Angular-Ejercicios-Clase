import { TestBed } from '@angular/core/testing';

import { BatmanService } from './batman.service';

describe('BatmanService', () => {
  let service: BatmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
