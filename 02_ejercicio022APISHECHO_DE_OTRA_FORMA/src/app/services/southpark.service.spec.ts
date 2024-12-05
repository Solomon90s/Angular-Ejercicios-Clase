import { TestBed } from '@angular/core/testing';

import { SouthparkService } from './southpark.service';

describe('SouthparkService', () => {
  let service: SouthparkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SouthparkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
