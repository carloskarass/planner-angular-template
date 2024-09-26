import { TestBed } from '@angular/core/testing';

import { TablesLinenService } from './tables-linen.service';

describe('TablesLinenService', () => {
  let service: TablesLinenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablesLinenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
