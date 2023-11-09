import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';

const routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
