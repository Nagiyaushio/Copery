import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';
import { PortalModule } from '@angular/cdk/portal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from 'src/app/_core/shares/material-module';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    UserDetailRoutingModule,
    MaterialModule,
    PortalModule,
    OrderModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    MatPaginatorModule,
  ],
})
export class UserDetailModule {}
