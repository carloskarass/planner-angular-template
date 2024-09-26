import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarMobileSubmenuComponent } from './navbar-mobile/navbar-mobile-submenu/navbar-mobile-submenu.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobilecomponent';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [MatIconModule, NavbarComponent, NavbarMobileComponent, NavbarMobileSubmenuComponent, SidebarComponent],
  exports: [NavbarComponent, NavbarMobileComponent, NavbarMobileSubmenuComponent, SidebarComponent],
})
export class NavBarModule {}
