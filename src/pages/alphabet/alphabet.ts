import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccuielPage} from "../accuiel/accuiel";
import {BPage} from "../b/b";

/**
 * Generated class for the AlphabetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alphabet',
  templateUrl: 'alphabet.html',
})
export class AlphabetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ouvrirbpage(){
    this.navCtrl.push(BPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(AccuielPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlphabetPage');
  }

}
