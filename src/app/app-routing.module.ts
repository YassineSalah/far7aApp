import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page-acc',
    loadChildren: () => import('./page-acc/page-acc.module').then( m => m.PageAccPageModule)
  },
  {
    path: 'page-insc',
    loadChildren: () => import('./page-insc/page-insc.module').then( m => m.PageInscPageModule)
  },
  {
    path: 'proprietaire',
    loadChildren: () => import('./proprietaire/proprietaire.module').then( m => m.ProprietairePageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
