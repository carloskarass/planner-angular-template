import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLinenComponent } from './table-linen.component';

describe('TableLinenComponent', () => {
  let component: TableLinenComponent;
  let fixture: ComponentFixture<TableLinenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableLinenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableLinenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
