import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WPage } from './w';

@NgModule({
  declarations: [
    WPage,
  ],
  imports: [
    IonicPageModule.forChild(WPage),
  ],
})
export class WPageModule {}
