import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { CandeactiveGuard } from 'src/app/_core/guards/candeactive.guard';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    canDeactivate: [CandeactiveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
