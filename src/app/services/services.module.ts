import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouteReuseStrategy} from "@angular/router";
import {IonicRouteStrategy} from "@ionic/angular";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  ],
})
export class ServicesModule {
}
