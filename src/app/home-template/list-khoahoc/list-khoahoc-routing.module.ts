import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListKhoahocComponent } from './list-khoahoc.component';

const routes: Routes = [
  {
    path: '',
    component: ListKhoahocComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListKhoahocRoutingModule {}
