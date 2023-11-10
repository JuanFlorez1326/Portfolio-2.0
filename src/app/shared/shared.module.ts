import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    RouterLinkActive
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule {}