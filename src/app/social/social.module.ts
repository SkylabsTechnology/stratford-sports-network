import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocialPage } from './social.page';

import { SocialPageRoutingModule } from './social-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SocialPageRoutingModule
  ],
  declarations: [SocialPage]
})
export class SocialPageModule {}
