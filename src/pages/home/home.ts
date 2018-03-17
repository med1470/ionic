import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  {AccuielPage} from '../accuiel/accuiel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ouvriraccuielpage(){
    var audio=new Audio('assets/audio/APM_Adobe_Going Home_v3.wav') ;
    audio.play();
    this.navCtrl.push(AccuielPage);
  }

}
