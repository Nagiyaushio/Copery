import { MaterialModule } from '../_core/shares/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplateRoutingModule } from './home-template-routing.module';
import { HomeTemplateComponent } from './home-template.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';

@NgModule({
  declarations: [HomeTemplateComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, HomeTemplateRoutingModule, MaterialModule],
})
export class HomeTemplateModule {}
