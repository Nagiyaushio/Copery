import { AuthGuardGuard } from './../../_core/guards/auth-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'administrator',
        pathMatch: 'full',
      },

      {
        path: 'users',
        loadChildren: () =>
          import('./quan-ly-nguoi-dung/quan-ly-nguoi-dung.module').then(
            (m) => m.QuanLyNguoiDungModule
          ),
        // canActivate: [AuthGuardGuard],
      },

      {
        path: 'courses',
        loadChildren: () =>
          import('./quan-ly-khoa-hoc/quan-ly-khoa-hoc.module').then(
            (m) => m.QuanLyKhoaHocModule
          ),
        // canActivate: [AuthGuardGuard],
      },
      {
        path: 'administrator',
        loadChildren: () =>
          import('./thong-tin-quan-tri/thong-tin-quan-tri.module').then(
            (m) => m.ThongTinQuanTriModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
