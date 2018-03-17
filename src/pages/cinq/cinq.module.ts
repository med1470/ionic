import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CinqPage } from './cinq';

@NgModule({
  declarations: [
    CinqPage,
  ],
  imports: [
    IonicPageModule.forChild(CinqPage),
  ],
})
export class CinqPageModule {}
