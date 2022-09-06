import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurnPageRoutingModule } from './turn-routing.module';

import { TurnPage } from './turn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurnPageRoutingModule
  ],
  declarations: [TurnPage]
})
export class TurnPageModule {}
