import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TomatePage} from "../tomate/tomate";
import {PastequePage} from "../pasteque/pasteque";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the RaisinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-raisin',
  templateUrl: 'raisin.html',
})
export class RaisinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RaisinPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(TomatePage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(PastequePage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
