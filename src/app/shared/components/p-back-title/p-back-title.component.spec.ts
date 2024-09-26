import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PBackTitleComponent } from './p-back-title.component';

describe('PBackTitleComponent', () => {
  let component: PBackTitleComponent;
  let fixture: ComponentFixture<PBackTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PBackTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PBackTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
