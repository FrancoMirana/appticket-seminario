import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FuncionesPage } from './funciones.page';


import { FuncionesPageRoutingModule } from './funciones-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionesPageRoutingModule
  ],
  declarations: [FuncionesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FuncionesPageModule {}
