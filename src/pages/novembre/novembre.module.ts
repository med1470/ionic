import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovembrePage } from './novembre';

@NgModule({
  declarations: [
    NovembrePage,
  ],
  imports: [
    IonicPageModule.forChild(NovembrePage),
  ],
})
export class NovembrePageModule {}
