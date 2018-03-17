import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GrenouilPage} from "../grenouil/grenouil";
import {TortuePage} from "../tortue/tortue";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the LapinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lapin',
  templateUrl: 'lapin.html',
})
export class LapinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LapinPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(TortuePage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(GrenouilPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
