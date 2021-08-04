import { MaterialModule } from 'src/app/_core/shares/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { PortalModule } from '@angular/cdk/portal';
@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule,
    NgxPaginationModule,
    FormsModule,
    OrderModule,
    PortalModule,
  ],
})
export class CartModule {}
