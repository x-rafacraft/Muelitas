import { TestBed } from '@angular/core/testing';

import { EstudiantedetalleService } from './estudiantedetalle.service';

describe('EstudiantedetalleService', () => {
  let service: EstudiantedetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiantedetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
