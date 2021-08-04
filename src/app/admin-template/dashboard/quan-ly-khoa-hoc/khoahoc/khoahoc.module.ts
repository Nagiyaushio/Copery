import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhoahocRoutingModule } from './khoahoc-routing.module';
import { KhoahocComponent } from './khoahoc.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MaterialModule } from 'src/app/_core/shares/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { PortalModule } from '@angular/cdk/portal';
import { BangKhoahocComponent } from './bang-khoahoc/bang-khoahoc.component';
import { DialogKhoahocComponent } from './dialog-khoahoc/dialog-khoahoc.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    KhoahocComponent,
    BangKhoahocComponent,
    DialogKhoahocComponent,
  ],
  entryComponents: [DialogKhoahocComponent],
  imports: [
    CommonModule,
    KhoahocRoutingModule,
    MaterialModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatPaginatorModule,
    NgxPaginationModule,
    OrderModule,
    PortalModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule],
})
export class KhoahocModule {}
