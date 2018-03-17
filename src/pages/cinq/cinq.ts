import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SixPage} from "../six/six";
import {QuatrPage} from "../quatr/quatr";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the CinqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cinq',
  templateUrl: 'cinq.html',
})
export class CinqPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CinqPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(SixPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(QuatrPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
