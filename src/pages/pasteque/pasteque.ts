import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PommePage} from "../pomme/pomme";
import {RaisinPage} from "../raisin/raisin";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the PastequePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pasteque',
  templateUrl: 'pasteque.html',
})
export class PastequePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastequePage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(RaisinPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(PommePage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
