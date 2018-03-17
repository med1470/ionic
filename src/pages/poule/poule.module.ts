import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoulePage } from './poule';

@NgModule({
  declarations: [
    PoulePage,
  ],
  imports: [
    IonicPageModule.forChild(PoulePage),
  ],
})
export class PoulePageModule {}
