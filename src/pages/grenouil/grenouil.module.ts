import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrenouilPage } from './grenouil';

@NgModule({
  declarations: [
    GrenouilPage,
  ],
  imports: [
    IonicPageModule.forChild(GrenouilPage),
  ],
})
export class GrenouilPageModule {}
