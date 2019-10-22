import { TestBed } from '@angular/core/testing';

import { CiudadesProviderService } from './ciudades-provider.service';

describe('CiudadesProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CiudadesProviderService = TestBed.get(CiudadesProviderService);
    expect(service).toBeTruthy();
  });
});
