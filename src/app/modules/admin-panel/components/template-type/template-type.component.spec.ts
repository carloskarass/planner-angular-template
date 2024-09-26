import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTypeComponent } from './template-type.component';

describe('TemplateTypeComponent', () => {
  let component: TemplateTypeComponent;
  let fixture: ComponentFixture<TemplateTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
