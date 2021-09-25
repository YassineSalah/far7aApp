import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageInscPage } from './page-insc.page';

const routes: Routes = [
  {
    path: '',
    component: PageInscPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageInscPageRoutingModule {}
