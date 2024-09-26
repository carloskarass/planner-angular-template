import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PDataGridComponent } from './p-data-grid.component';

@NgModule({
  imports: [MatIconModule, PDataGridComponent],
  exports: [PDataGridComponent],
})
export class PDataGridModule {}
