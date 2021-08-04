import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyKhoaHocRoutingModule } from './quan-ly-khoa-hoc-routing.module';
import { QuanLyKhoaHocComponent } from './quan-ly-khoa-hoc.component';
import { MaterialModule } from 'src/app/_core/shares/material-module';
// import { DialogExampleComponent } from '../quan-ly-nguoi-dung/dialog-example/dialog-example.component';

@NgModule({
  declarations: [QuanLyKhoaHocComponent],
  // entryComponents: [DialogExampleComponent],
  imports: [CommonModule, QuanLyKhoaHocRoutingModule, MaterialModule],
})
export class QuanLyKhoaHocModule {}
