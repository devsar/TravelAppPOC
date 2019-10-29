import { TestBed } from '@angular/core/testing';

import { DateProviderService } from './date-provider.service';

describe('DateProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateProviderService = TestBed.get(DateProviderService);
    expect(service).toBeTruthy();
  });
});
