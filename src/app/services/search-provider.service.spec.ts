import { TestBed } from '@angular/core/testing';

import { SearchProviderService } from './search-provider.service';

describe('SearchProviderService', () => {
  let service: SearchProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
