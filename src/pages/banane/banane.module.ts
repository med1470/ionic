import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BananePage } from './banane';

@NgModule({
  declarations: [
    BananePage,
  ],
  imports: [
    IonicPageModule.forChild(BananePage),
  ],
})
export class BananePageModule {}
