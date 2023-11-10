import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: ()  => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'skills',
    loadChildren: ()  => import('./skills/skills.module').then(m => m.SkillsModule)
  },
  {
    path: 'works',
    loadChildren: ()  => import('./works/works.module').then(m => m.WorksModule)
  },
  {
    path: 'about',
    loadChildren: ()  => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: ()  => import('./contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}