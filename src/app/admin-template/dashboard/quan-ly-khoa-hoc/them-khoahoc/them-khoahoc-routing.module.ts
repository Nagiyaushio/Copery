import { CandeactiveGuard } from 'src/app/_core/guards/candeactive.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemKhoahocComponent } from './them-khoahoc.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

const routes: Routes = [
  {
    path: '',
    component: ThemKhoahocComponent,
    canDeactivate: [CandeactiveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class ThemKhoahocRoutingModule {}
