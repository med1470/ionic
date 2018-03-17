import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LapinPage } from './lapin';

@NgModule({
  declarations: [
    LapinPage,
  ],
  imports: [
    IonicPageModule.forChild(LapinPage),
  ],
})
export class LapinPageModule {}
