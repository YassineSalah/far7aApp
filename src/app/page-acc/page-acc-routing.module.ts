import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAccPage } from './page-acc.page';

const routes: Routes = [
  {
    path: '',
    component: PageAccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAccPageRoutingModule {}
