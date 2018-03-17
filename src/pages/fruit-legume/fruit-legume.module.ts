import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FruitLegumePage } from './fruit-legume';

@NgModule({
  declarations: [
    FruitLegumePage,
  ],
  imports: [
    IonicPageModule.forChild(FruitLegumePage),
  ],
})
export class FruitLegumePageModule {}
