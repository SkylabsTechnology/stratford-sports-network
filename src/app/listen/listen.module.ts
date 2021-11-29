import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListenPage } from './listen.page';

import { ListenPageRoutingModule } from './listen-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ListenPageRoutingModule
  ],
  declarations: [ListenPage]
})
export class ListenPageModule {}
