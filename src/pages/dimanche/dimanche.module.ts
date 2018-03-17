import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DimanchePage } from './dimanche';

@NgModule({
  declarations: [
    DimanchePage,
  ],
  imports: [
    IonicPageModule.forChild(DimanchePage),
  ],
})
export class DimanchePageModule {}
