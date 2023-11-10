import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLinkActive, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    TranslateModule,
    RouterLinkActive
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    TranslateModule
  ]
})
export class SharedModule {}