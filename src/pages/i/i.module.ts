import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IPage } from './i';

@NgModule({
  declarations: [
    IPage,
  ],
  imports: [
    IonicPageModule.forChild(IPage),
  ],
})
export class IPageModule {}
