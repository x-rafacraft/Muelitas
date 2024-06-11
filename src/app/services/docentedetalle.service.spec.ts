import { TestBed } from '@angular/core/testing';

import { DocentedetalleService } from './docentedetalle.service';

describe('DocentedetalleService', () => {
  let service: DocentedetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocentedetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
