import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HuitPage} from "../huit/huit";
import {SixPage} from "../six/six";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the SeptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sept',
  templateUrl: 'sept.html',
})
export class SeptPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeptPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(HuitPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(SixPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
