import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {components} from "./components";
import {NotFoundPageRoutingModule} from "./not-found-page-routing.module";


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    NotFoundPageRoutingModule,
  ]
})
export class NotFoundPageModule {
}
