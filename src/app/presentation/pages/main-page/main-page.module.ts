import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {components} from "./components";
import {MainPageRoutingModule} from "./main-page-routing.module";


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
  ]
})
export class MainPageModule {
}
