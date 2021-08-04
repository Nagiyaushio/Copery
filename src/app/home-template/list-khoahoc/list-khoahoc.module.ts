import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListKhoahocRoutingModule } from './list-khoahoc-routing.module';
import { ListKhoahocComponent } from './list-khoahoc.component';
import { ShareModule } from 'src/app/_core/shares/share-module/share-module.module';
import { MaterialModule } from 'src/app/_core/shares/material-module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { FindKhoahocComponent } from './find-khoahoc/find-khoahoc.component';
import { FrontendPipe } from './frontend.pipe';
import { BackendPipe } from './backend.pipe';
import { DidongPipe } from './didong.pipe';
import { TuduyPipe } from './tuduy.pipe';
import { ThietkePipe } from './thietke.pipe';
import { FullstackPipe } from './fullstack.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InterestingCourseComponent } from './interesting-course/interesting-course.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    ListKhoahocComponent,
    ModalComponent,
    FindKhoahocComponent,
    FrontendPipe,
    BackendPipe,
    DidongPipe,
    TuduyPipe,
    ThietkePipe,
    FullstackPipe,
    InterestingCourseComponent,
  ],
  imports: [
    CommonModule,
    ListKhoahocRoutingModule,
    ShareModule,
    MaterialModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    SlickCarouselModule,
    NgxSpinnerModule,
  ],
  bootstrap: [ListKhoahocComponent],
})
export class ListKhoahocModule {}
