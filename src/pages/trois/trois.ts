import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuatrPage} from "../quatr/quatr";
import {DeuxPage} from "../deux/deux";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the TroisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trois',
  templateUrl: 'trois.html',
})
export class TroisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TroisPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(QuatrPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(DeuxPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
