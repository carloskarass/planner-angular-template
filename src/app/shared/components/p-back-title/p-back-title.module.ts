import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PBackTitleComponent } from './p-back-title.component';

@NgModule({
  imports: [MatIconModule, PBackTitleComponent],
  exports: [PBackTitleComponent],
})
export class PBackTitleModule {}
