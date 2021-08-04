import { MaterialModule } from 'src/app/_core/shares/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { PortalModule } from '@angular/cdk/portal';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MaterialModule,
    Ng2SearchPipeModule,
    OrderModule,
    PortalModule,
    MatPaginatorModule,
    NgxPaginationModule,
  ],
})
export class CourseModule {}
