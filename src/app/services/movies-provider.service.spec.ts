import { TestBed } from '@angular/core/testing';

import { MoviesProviderService } from './movies-provider.service';

describe('MoviesProviderService', () => {
  let service: MoviesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesProviderService);
  });
});
