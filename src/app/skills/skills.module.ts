import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: SkillsPageComponent
  }
];

@NgModule({
  declarations: [
    SkillsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SkillsModule {}