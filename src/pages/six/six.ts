import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SeptPage} from "../sept/sept";
import {CinqPage} from "../cinq/cinq";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the SixPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-six',
  templateUrl: 'six.html',
})
export class SixPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SixPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(SeptPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(CinqPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
