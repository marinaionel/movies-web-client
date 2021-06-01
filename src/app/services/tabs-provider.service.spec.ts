import { TestBed } from '@angular/core/testing';

import { TabsProviderService } from './tabs-provider.service';

describe('TabsProviderService', () => {
  let service: TabsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
