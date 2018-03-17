import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LapinPage} from "../lapin/lapin";
import {OiseauPage} from "../oiseau/oiseau";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the TortuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tortue',
  templateUrl: 'tortue.html',
})
export class TortuePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TortuePage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(OiseauPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(LapinPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
