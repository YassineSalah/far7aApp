import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAccPageRoutingModule } from './page-acc-routing.module';

import { PageAccPage } from './page-acc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAccPageRoutingModule
  ],
  declarations: [PageAccPage]
})
export class PageAccPageModule {}
