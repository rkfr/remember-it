import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { NotificationRepository } from '../core/domain/repositories';
import { NotificationLocalStorageRepository } from '../data/respositories';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: NotificationRepository, useClass: NotificationLocalStorageRepository },
  ],
})
export class ServicesModule {
}
