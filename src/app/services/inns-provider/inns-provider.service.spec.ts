import { TestBed } from '@angular/core/testing';

import { InnsProviderService } from './inns-provider.service';

describe('InnsProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InnsProviderService = TestBed.get(InnsProviderService);
    expect(service).toBeTruthy();
  });
});
