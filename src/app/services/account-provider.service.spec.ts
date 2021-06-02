import { TestBed } from '@angular/core/testing';

import { AccountProviderService } from './account-provider.service';

describe('AccountProviderService', () => {
  let service: AccountProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountProviderService);
  });
});
