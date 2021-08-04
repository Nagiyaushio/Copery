import { MaterialModule } from 'src/app/_core/shares/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { KhoaHocComponent } from './khoa-hoc/khoa-hoc.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [HomeComponent, KhoaHocComponent, ModalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MaterialModule,
    Ng2SearchPipeModule,
    SlickCarouselModule,
    NgxSpinnerModule,
  ],
})
export class HomeModule {}
