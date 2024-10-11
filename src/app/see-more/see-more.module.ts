import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeMorePageRoutingModule } from './see-more-routing.module';

import { SeeMorePage } from './see-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeMorePageRoutingModule
  ],
  declarations: [SeeMorePage]
})
export class SeeMorePageModule {}
