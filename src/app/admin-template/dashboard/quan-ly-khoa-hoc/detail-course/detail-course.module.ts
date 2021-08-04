import { MaterialModule } from 'src/app/_core/shares/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCourseRoutingModule } from './detail-course-routing.module';
import { DetailCourseComponent } from './detail-course.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { PortalModule } from '@angular/cdk/portal';
@NgModule({
  declarations: [DetailCourseComponent],
  imports: [
    CommonModule,
    DetailCourseRoutingModule,
    MaterialModule,
    PortalModule,
    OrderModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    MatPaginatorModule,
  ],
})
export class DetailCourseModule {}
