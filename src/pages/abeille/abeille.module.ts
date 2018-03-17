import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbeillePage } from './abeille';

@NgModule({
  declarations: [
    AbeillePage,
  ],
  imports: [
    IonicPageModule.forChild(AbeillePage),
  ],
})
export class AbeillePageModule {}
