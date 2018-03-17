import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PommePage } from './pomme';

@NgModule({
  declarations: [
    PommePage,
  ],
  imports: [
    IonicPageModule.forChild(PommePage),
  ],
})
export class PommePageModule {}
