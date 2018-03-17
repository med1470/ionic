import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TortuePage } from './tortue';

@NgModule({
  declarations: [
    TortuePage,
  ],
  imports: [
    IonicPageModule.forChild(TortuePage),
  ],
})
export class TortuePageModule {}
