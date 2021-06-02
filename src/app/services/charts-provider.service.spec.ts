import { TestBed } from '@angular/core/testing';

import { ChartsProviderService } from './charts-provider.service';

describe('ChartsProviderService', () => {
  let service: ChartsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsProviderService);
  });
});
