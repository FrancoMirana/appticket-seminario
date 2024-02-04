import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path:"home",
        loadChildren:()=>
        import('../home/home.module').then(m=>m.HomePageModule)
      },
      {
        path:"cociertos",
        loadChildren:()=>
        import('../cociertos/cociertos.module').then(m=>m.CociertosPageModule)
      },
      {
        path:"funciones",
        loadChildren:()=>
        import('../funciones/funciones.module').then(m=>m.FuncionesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
