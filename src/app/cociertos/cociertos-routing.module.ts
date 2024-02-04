import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CociertosPage } from './cociertos.page';

const routes: Routes = [
  {
    path: '',
    component: CociertosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CociertosPageRoutingModule {}
