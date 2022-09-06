import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurnPage } from './turn.page';

const routes: Routes = [
  {
    path: '',
    component: TurnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurnPageRoutingModule {}
