import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/_core/shares/share-module/share-module.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule,
    ShareModule,
    NgxSpinnerModule,
  ],
})
export class AboutModule {}
