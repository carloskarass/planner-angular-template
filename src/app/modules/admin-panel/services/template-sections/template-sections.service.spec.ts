import { TestBed } from '@angular/core/testing';

import { TemplateSectionsService } from './template-sections.service';

describe('TemplateSectionsService', () => {
  let service: TemplateSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
