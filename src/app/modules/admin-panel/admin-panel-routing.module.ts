import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeveragesComponent } from './components/beverages/beverages.component';
import { EventTypeComponent } from './components/event-type/event-type.component';
import { EventComponent } from './components/event/event.component';
import { GuestComponent } from './components/guest/guest.component';
import { HostComponent } from './components/host/host.component';
import { TableLinenComponent } from './components/table-linen/table-linen.component';
import { TemplateSectionComponent } from './components/template-section/template-section.component';
import { TemplateTypeComponent } from './components/template-type/template-type.component';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
  {
    path: 'beverages',
    component: BeveragesComponent,
  },
  {
    path: 'table-linen',
    component: TableLinenComponent,
  },
  {
    path: 'event-type',
    component: EventTypeComponent,
  },
  {
    path: 'template-type',
    component: TemplateTypeComponent,
  },
  {
    path: 'guest',
    component: GuestComponent,
  },
  {
    path: 'host',
    component: HostComponent,
  },
  {
    path: 'event',
    component: EventComponent,
  },
  {
    path: 'template-section',
    component: TemplateSectionComponent,
  },
  {
    path: 'template',
    component: TemplateComponent,
  },
  // { path: '', redirectTo: 'beverages', pathMatch: 'full' },
  // { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
