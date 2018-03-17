import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccuielPage} from "../accuiel/accuiel";
import {FevrierPage} from "../fevrier/fevrier";

/**
 * Generated class for the MoisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mois',
  templateUrl: 'mois.html',
})
export class MoisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoisPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(FevrierPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(AccuielPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
