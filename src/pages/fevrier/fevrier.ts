import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MarsPage} from "../mars/mars";
import {AccuielPage} from "../accuiel/accuiel";
import {MoisPage} from "../mois/mois";

/**
 * Generated class for the FevrierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fevrier',
  templateUrl: 'fevrier.html',
})
export class FevrierPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FevrierPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(MarsPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(MoisPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
