import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //localhost:4200
  {
    path: '',
    loadChildren: () =>
      import('./home-template/home-template.module').then(
        (m) => m.HomeTemplateModule
      ),
  },

  //localhost:4200/admin
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-template/admin-template.module').then(
        (m) => m.AdminTemplateModule
      ),
  },

  //PageNotFound
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
