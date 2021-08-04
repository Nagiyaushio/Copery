import { QuanLyKhoaHocComponent } from './quan-ly-khoa-hoc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: QuanLyKhoaHocComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },

      {
        path: 'add',
        loadChildren: () =>
          import('./them-khoahoc/them-khoahoc.module').then(
            (m) => m.ThemKhoahocModule
          ),
      },

      {
        path: 'list',
        loadChildren: () =>
          import('./khoahoc/khoahoc.module').then((m) => m.KhoahocModule),
      },

      {
        path: ':id',
        loadChildren: () =>
          import('./detail-course/detail-course.module').then(
            (m) => m.DetailCourseModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuanLyKhoaHocRoutingModule {}
