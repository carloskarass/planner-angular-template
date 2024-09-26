import { TestBed } from '@angular/core/testing';

import { HostesService } from './hostes.service';

describe('HostesService', () => {
  let service: HostesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
