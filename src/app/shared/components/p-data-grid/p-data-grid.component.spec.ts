import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDataGridComponent } from './p-data-grid.component';

describe('PDataGridComponent', () => {
  let component: PDataGridComponent;
  let fixture: ComponentFixture<PDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PDataGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
