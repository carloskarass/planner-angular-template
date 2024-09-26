import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SidebarMenuComponent } from './sidebar-menu.component';

@NgModule({
  imports: [MatIconModule, SidebarMenuComponent],
  exports: [SidebarMenuComponent],
})
export class SidebarMenuModule {}
