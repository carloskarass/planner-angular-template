import { TestBed } from '@angular/core/testing';

import { TemplateTypesService } from './template-types.service';

describe('TemplateTypesService', () => {
  let service: TemplateTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
