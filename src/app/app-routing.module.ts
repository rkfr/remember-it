import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./presentation/pages/main-page/main-page.module").then(m => m.MainPageModule),
    pathMatch: 'full',
  },
  {
    path: "**",
    loadChildren: () => import("./presentation/pages/not-found-page/not-found-page.module").then(m => m.NotFoundPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
