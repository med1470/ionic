import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoursPage } from './jours';

@NgModule({
  declarations: [
    JoursPage,
  ],
  imports: [
    IonicPageModule.forChild(JoursPage),
  ],
})
export class JoursPageModule {}
