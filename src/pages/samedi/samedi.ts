import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DimanchePage} from "../dimanche/dimanche";
import {VendrediPage} from "../vendredi/vendredi";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the SamediPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-samedi',
  templateUrl: 'samedi.html',
})
export class SamediPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SamediPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(DimanchePage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(VendrediPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
