import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThongTinQuanTriRoutingModule } from './thong-tin-quan-tri-routing.module';
import { ThongTinQuanTriComponent } from './thong-tin-quan-tri.component';
import { MaterialModule } from 'src/app/_core/shares/material-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ThongTinQuanTriComponent],
  imports: [
    CommonModule,
    ThongTinQuanTriRoutingModule,
    MaterialModule,
    FormsModule,
  ],
})
export class ThongTinQuanTriModule {}
