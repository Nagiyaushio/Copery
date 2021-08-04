import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandeactiveGuard } from 'src/app/_core/guards/candeactive.guard';
import { ThemNguoidungComponent } from './them-nguoidung.component';

const routes: Routes = [
  {
    path: '',
    component: ThemNguoidungComponent,
    canDeactivate: [CandeactiveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemNguoidungRoutingModule {}
