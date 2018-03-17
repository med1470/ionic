import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarottePage } from './carotte';

@NgModule({
  declarations: [
    CarottePage,
  ],
  imports: [
    IonicPageModule.forChild(CarottePage),
  ],
})
export class CarottePageModule {}
