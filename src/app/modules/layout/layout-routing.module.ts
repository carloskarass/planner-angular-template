import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: LayoutComponent,
    loadChildren: () => import('../welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'admin-panel',
    component: LayoutComponent,
    loadChildren: () => import('../admin-panel/admin-panel.module').then((m) => m.AdminPanelModule),
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
