import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SeptPage} from "../sept/sept";
import {NeufPage} from "../neuf/neuf";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the HuitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-huit',
  templateUrl: 'huit.html',
})
export class HuitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HuitPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(NeufPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(SeptPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
