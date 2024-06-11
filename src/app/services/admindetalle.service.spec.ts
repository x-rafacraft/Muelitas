import { TestBed } from '@angular/core/testing';

import { AdmindetalleService } from './admindetalle.service';

describe('AdmindetalleService', () => {
  let service: AdmindetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmindetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
