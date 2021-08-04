import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung.component';

const routes: Routes = [
  {
    path: '',
    component: QuanLyNguoiDungComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },

      {
        path: 'add',
        loadChildren: () =>
          import('./them-nguoidung/them-nguoidung.module').then(
            (m) => m.ThemNguoidungModule
          ),
      },

      {
        path: 'list',
        loadChildren: () =>
          import('./nguoidung/nguoidung.module').then((m) => m.NguoidungModule),
      },

      {
        path: ':id',
        loadChildren: () =>
          import('./user-detail/user-detail.module').then(
            (m) => m.UserDetailModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuanLyNguoiDungRoutingModule {}
