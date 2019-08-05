import { TestBed } from '@angular/core/testing';

import { ServicioObsService } from './servicio-obs.service';

describe('ServicioObsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioObsService = TestBed.get(ServicioObsService);
    expect(service).toBeTruthy();
  });
});
