import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastequePage } from './pasteque';

@NgModule({
  declarations: [
    PastequePage,
  ],
  imports: [
    IonicPageModule.forChild(PastequePage),
  ],
})
export class PastequePageModule {}
