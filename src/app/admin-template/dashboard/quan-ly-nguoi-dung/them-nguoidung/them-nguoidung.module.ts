import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemNguoidungRoutingModule } from './them-nguoidung-routing.module';
import { ThemNguoidungComponent } from './them-nguoidung.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/_core/shares/material-module';

@NgModule({
  declarations: [ThemNguoidungComponent],
  imports: [
    CommonModule,
    ThemNguoidungRoutingModule,
    FormsModule,
    MaterialModule,
  ],
})
export class ThemNguoidungModule {}
