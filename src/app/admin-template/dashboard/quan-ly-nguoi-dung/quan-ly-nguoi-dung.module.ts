import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyNguoiDungRoutingModule } from './quan-ly-nguoi-dung-routing.module';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung.component';
import { MaterialModule } from 'src/app/_core/shares/material-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuanLyNguoiDungComponent],
  imports: [
    CommonModule,
    QuanLyNguoiDungRoutingModule,
    MaterialModule,
    FormsModule,
  ],
})
export class QuanLyNguoiDungModule {}
