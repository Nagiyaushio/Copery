import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { MaterialModule } from '../_core/shares/material-module';
import { NavbarComponent } from '../_components/navbar/navbar.component';
import { FooterComponent } from '../_components/footer/footer.component';

@NgModule({
  declarations: [PageNotFoundComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, PageNotFoundRoutingModule, MaterialModule],
})
export class PageNotFoundModule {}
