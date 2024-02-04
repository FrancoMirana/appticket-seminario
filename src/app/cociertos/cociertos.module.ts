import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CociertosPageRoutingModule } from './cociertos-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CociertosPage } from './cociertos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CociertosPageRoutingModule
  ],
  declarations: [CociertosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CociertosPageModule {}
