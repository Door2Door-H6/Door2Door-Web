import { TestBed } from '@angular/core/testing';

import { RouteDescriptionService } from './route-description.service';

describe('RouteDescriptionService', () => {
  let service: RouteDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
