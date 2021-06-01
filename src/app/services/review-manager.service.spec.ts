import { TestBed } from '@angular/core/testing';

import { ReviewManagerService } from './review-manager.service';

describe('ReviewManagerService', () => {
  let service: ReviewManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
