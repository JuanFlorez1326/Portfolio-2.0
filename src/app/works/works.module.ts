import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksPageComponent } from './works-page/works-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: WorksPageComponent
  }
];

@NgModule({
  declarations: [
    WorksPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WorksModule {}