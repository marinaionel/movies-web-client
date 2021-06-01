import { TestBed } from '@angular/core/testing';

import { CrewMemberProviderService } from './crew-member-provider.service';

describe('CrewMemberProviderService', () => {
  let service: CrewMemberProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrewMemberProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
