import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OiseauPage } from './oiseau';

@NgModule({
  declarations: [
    OiseauPage,
  ],
  imports: [
    IonicPageModule.forChild(OiseauPage),
  ],
})
export class OiseauPageModule {}
