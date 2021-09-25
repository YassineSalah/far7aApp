import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageInscPageRoutingModule } from './page-insc-routing.module';

import { PageInscPage } from './page-insc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageInscPageRoutingModule
  ],
  declarations: [PageInscPage]
})
export class PageInscPageModule {}
