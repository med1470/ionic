import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoirePage } from './poire';

@NgModule({
  declarations: [
    PoirePage,
  ],
  imports: [
    IonicPageModule.forChild(PoirePage),
  ],
})
export class PoirePageModule {}
