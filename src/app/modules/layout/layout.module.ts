import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { LayoutRoutingModule } from './layout-routing.module';
@NgModule({
  imports: [LayoutRoutingModule, MatIconModule, HttpClientModule, AngularSvgIconModule.forRoot()],
})
export class LayoutModule {}
