import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';

@NgModule({
  imports: [AdminPanelRoutingModule, MatIconModule, HttpClientModule, AngularSvgIconModule.forRoot()],
})
export class AdminPanelModule {}
