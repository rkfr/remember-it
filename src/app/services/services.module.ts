import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicProviders, NotificationProviders } from './providers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ...IonicProviders,
    ...NotificationProviders,
  ],
})
export class ServicesModule {
}
