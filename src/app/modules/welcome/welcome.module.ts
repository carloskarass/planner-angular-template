import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [WelcomeRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
