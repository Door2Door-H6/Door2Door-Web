import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';

describe('CatagoryService', () => {
  let service: CategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
