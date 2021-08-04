import { BangNguoidungComponent } from './bang-nguoidung/bang-nguoidung.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguoidungRoutingModule } from './nguoidung-routing.module';
import { NguoidungComponent } from './nguoidung.component';
import { MaterialModule } from 'src/app/_core/shares/material-module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { PortalModule } from '@angular/cdk/portal';
@NgModule({
  declarations: [
    NguoidungComponent,
    DialogExampleComponent,
    BangNguoidungComponent,
  ],
  entryComponents: [DialogExampleComponent],
  imports: [
    CommonModule,
    NguoidungRoutingModule,
    MaterialModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatPaginatorModule,
    NgxPaginationModule,
    OrderModule,
    PortalModule,
    ReactiveFormsModule,
  ],
})
export class NguoidungModule {}
