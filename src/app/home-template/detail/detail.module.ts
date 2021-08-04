import { MaterialModule } from './../../_core/shares/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DetailKhoahocComponent } from './detail-khoahoc/detail-khoahoc.component';

import { RouterModule } from '@angular/router';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [DetailComponent, DetailKhoahocComponent, ModalDetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    MaterialModule,
    SlickCarouselModule,
    RouterModule,
    NgxSpinnerModule,
  ],
})
export class DetailModule {}
