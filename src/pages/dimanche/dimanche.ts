import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AccuielPage} from "../accuiel/accuiel";
import {SamediPage} from "../samedi/samedi";

/**
 * Generated class for the DimanchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dimanche',
  templateUrl: 'dimanche.html',
})
export class DimanchePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DimanchePage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(AccuielPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(SamediPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
