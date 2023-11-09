import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: AboutMeComponent
  }
];


@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
