import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TomatePage } from './tomate';

@NgModule({
  declarations: [
    TomatePage,
  ],
  imports: [
    IonicPageModule.forChild(TomatePage),
  ],
})
export class TomatePageModule {}
