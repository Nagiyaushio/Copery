import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemKhoahocRoutingModule } from './them-khoahoc-routing.module';
import { ThemKhoahocComponent } from './them-khoahoc.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/_core/shares/material-module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [ThemKhoahocComponent],
  imports: [
    CommonModule,
    ThemKhoahocRoutingModule,
    FormsModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule],
})
export class ThemKhoahocModule {}
