import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes = [
  {
    path: '',
    component: ContactMeComponent
  }
];

@NgModule({
  declarations: [
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule {}