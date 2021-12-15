import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

import { GeographicalDataService } from './geographical-data.service';

describe('GeographicalDataService', () => {
  let service: GeographicalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApiService],
      providers: [ApiService]
    });
    service = TestBed.inject(GeographicalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
