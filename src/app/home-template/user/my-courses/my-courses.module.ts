import { MaterialModule } from 'src/app/_core/shares/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCoursesRoutingModule } from './my-courses-routing.module';
import { MyCoursesComponent } from './my-courses.component';
import { PortalModule } from '@angular/cdk/portal';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [MyCoursesComponent],
  imports: [
    CommonModule,
    MyCoursesRoutingModule,
    MaterialModule,
    Ng2SearchPipeModule,
    OrderModule,
    PortalModule,
    MatPaginatorModule,
    NgxPaginationModule,
  ],
})
export class MyCoursesModule {}
